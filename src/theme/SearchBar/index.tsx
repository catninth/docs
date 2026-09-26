import {useEffect, useRef, type ComponentProps} from 'react';
import OriginalSearchBar from '@theme-original/SearchBar';
import {translate} from '@docusaurus/Translate';

/** Adapt the legacy autocomplete markup without changing its keyboard behavior.
 * The plugin owns this DOM. Keep the footer link outside the listbox semantics,
 * and connect the combobox to the actual options using ARIA 1.2 controls.
 * Recheck against the open-search accessibility audit when upgrading the plugin.
 */
export default function SearchBar(props: ComponentProps<typeof OriginalSearchBar>) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = root.current;
    if (!container) return;

    const repairSemantics = () => {
      const input = container.querySelector<HTMLInputElement>('input');
      const popup = container.querySelector<HTMLElement>('[id*="-listbox-"]');
      const clear = container.querySelector<HTMLButtonElement>('button');
      if (input) input.setAttribute('aria-label', translate({id: 'theme.SearchBar.label', message: 'Search'}));
      if (clear) {
        clear.setAttribute('aria-label', translate({id: 'search.clear', message: 'Clear search'}));
        clear.setAttribute('data-cn-search-clear', '');
      }
      if (!input || !popup) return;

      const option = popup.querySelector<HTMLElement>('[role="option"]:not([aria-disabled="true"])');
      const list = option?.parentElement ?? popup.firstElementChild;
      if (!(list instanceof HTMLElement)) return;
      const previous = popup.querySelector<HTMLElement>('[data-cn-search-list]');
      if (previous && previous !== list) {
        for (const attribute of ['role', 'id', 'aria-label', 'data-cn-search-list']) previous.removeAttribute(attribute);
      }
      popup.removeAttribute('role');
      list.id = `${popup.id}-results`;
      list.setAttribute('role', 'listbox');
      list.setAttribute('data-cn-search-list', '');
      list.setAttribute('aria-label', translate({id: 'search.results', message: 'Search results'}));
      if (!option && list.firstElementChild) {
        // Present the plugin's empty-state message as an unavailable option.
        // It has no suggestion class, so autocomplete cannot select it.
        list.firstElementChild.setAttribute('role', 'option');
        list.firstElementChild.setAttribute('aria-disabled', 'true');
      }
      input.setAttribute('aria-controls', list.id);
      input.removeAttribute('aria-owns');
    };

    repairSemantics();
    const observer = new MutationObserver(repairSemantics);
    observer.observe(container, {childList: true, subtree: true});
    return () => observer.disconnect();
  }, []);

  return <div className="cn-search" ref={root}><OriginalSearchBar {...props} /></div>;
}
