/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
//import './styles.scss';
//import { PostTitle } from '@wordpress/editor';
import { EditorHistoryRedo, EditorHistoryUndo } from '@wordpress/editor';


 function Bheader({ show, setShow, show0, setShow0 }) {
	const secondarySidebar = () => {
		if (show) {
			return (
				<span onClick={setShow} className="block-editor-block-icon has-colors"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" context="list-view" aria-hidden="true" focusable="false"><path d="M6 5V18.5911L12 13.8473L18 18.5911V5H6Z"></path></svg></span>
			)
		}
		else {
			return (
				<span onClick={setShow} className="block-editor-block-icon has-colors"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" context="list-view" aria-hidden="true" focusable="false"><path   d="M15 7.5h-5v10h5v-10Zm1.5 0v10H19a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5h-2.5ZM6 7.5h2.5v10H6a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5ZM6 6h13a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"></path></svg></span>
			)
		}
	};

	const sidebar = () => {
		if (show0) {
			return (
				<span onClick={setShow0} className="block-editor-block-icon has-colors"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" context="list-view" aria-hidden="true" focusable="false"><path d="M6 5V18.5911L12 13.8473L18 18.5911V5H6Z"></path></svg></span>
			)
		}
		else {
			return (
				<span onClick={setShow0} className="block-editor-block-icon has-colors"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" context="list-view" aria-hidden="true" focusable="false"><path   d="M15 7.5h-5v10h5v-10Zm1.5 0v10H19a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5h-2.5ZM6 7.5h2.5v10H6a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5ZM6 6h13a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"></path></svg></span>
			)
		}
	};
	return (
		<div
			className="getdavesbe-header"
			role="region"
			aria-label={__('Standalone Editor top bar.', 'getdavesbe')}
			tabIndex="-1"
		>
			<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
				<h1 className="getdavesbe-header__title">
					{__('Standalone Block Editor', 'getdavesbe')}
				</h1>
				<div >
					<EditorHistoryUndo></EditorHistoryUndo>
					<EditorHistoryRedo></EditorHistoryRedo>
				</div>
			</div>
			<div className="header__">
				{secondarySidebar()}
				{sidebar()}   </div>
		</div>
	);
}


export default Bheader;