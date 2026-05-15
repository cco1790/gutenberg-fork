
import { __experimentalListView as ListView } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { useFocusOnMount, useFocusReturn, useInstanceId, useMergeRefs } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';
import { ESCAPE } from '@wordpress/keycodes';
//import './style.scss'

export default function ListViewSidebar({ rootClientId, blocks, className }) {

	const focusOnMountRef = useFocusOnMount('firstElement');
	const headerFocusReturnRef = useFocusReturn();
	const contentFocusReturnRef = useFocusReturn();
	function closeOnEscape(event) {
		if (event.keyCode === ESCAPE && !event.defaultPrevented) {
			setIsListViewOpened(false);
		}
	}
	function setIsListViewOpened() { };
	const instanceId = useInstanceId(ListViewSidebar);
	const labelId = `pattern__list-view-panel-label-${instanceId}`;

	return (
		// eslint-disable-next-line jsx-a11y/no-static-element-interactions
		<div aria-labelledby={labelId} className={className == "hide" ? "hide" : "pattern__list-view-panel"} onKeyDown={closeOnEscape}>
			<div className="pattern__list-view-panel-header" ref={headerFocusReturnRef}>
				<strong id={labelId}>{__('List View', 'wporg-patterns')}</strong>
				<Button
					label={__('Close List View Sidebar', 'wporg-patterns')}
					onClick={() => setIsListViewOpened(false)}
				/>
			</div>
			<div
				className="pattern__list-view-panel-content"
				ref={useMergeRefs([contentFocusReturnRef, focusOnMountRef])}
			>
				<ListView rootClientId={rootClientId} blocks={blocks} />
			</div>
		</div>
	);
}
