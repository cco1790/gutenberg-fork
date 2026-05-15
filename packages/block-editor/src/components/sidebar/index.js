
import { createSlotFill, Panel, privateApis as componentsPrivateApis } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { __dangerousOptInToUnstableAPIsOnlyForCoreModules } from '@wordpress/private-apis';
//import './styles.scss';
export const { lock, unlock } =
	__dangerousOptInToUnstableAPIsOnlyForCoreModules(
		'I acknowledge private features are not for use in themes or plugins and doing so will break in the next version of WordPress.',
		'@wordpress/block-editor'
	);

const { Tabs } = unlock(componentsPrivateApis);
const { Slot: InspectorSlot, Fill: InspectorFill } = createSlotFill(
	'StandAloneBlockEditorSidebarInspector'
);

function Sidebar({ className }) {

	return (
		<div
			className={className == "hide" ? "hide" : "getdavesbe-sidebar"}
			role="region"
			aria-label={__('Standalone Block Editor advanced settings.')}
			tabIndex="-1"
		>

			<Tabs defaultTabId={__('Inspector')}>
				<Tabs.TabList>
					<Tabs.Tab key={__('Inspector1')} tabId={__('Inspector1')}>
						{__('article')}
					</Tabs.Tab>
					<Tabs.Tab key={__('Inspector')} tabId={__('Inspector')}>
						{__('block')}
					</Tabs.Tab>
				</Tabs.TabList>
				<Tabs.TabPanel tabId={__('Inspector1')} focusable={true}>
					DFDFDF
				</Tabs.TabPanel>

				<Tabs.TabPanel tabId={__('Inspector')} focusable={true}>
					<InspectorSlot bubblesVirtually />
				</Tabs.TabPanel>
			</Tabs>

		</div>
	);
}

Sidebar.InspectorFill = InspectorFill;

export default Sidebar;
