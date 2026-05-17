
import {
    Popover,
    SlotFillProvider,
} from '@wordpress/components';
import { StrictMode, useEffect, useRef, useState } from '@wordpress/element';
import { FullscreenMode, InterfaceSkeleton } from '@wordpress/interface';
import { ShortcutProvider } from '@wordpress/keyboard-shortcuts';
import { dispatch, useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import { __dangerousOptInToUnstableAPIsOnlyForCoreModules } from '@wordpress/private-apis';
import { EditorProvider } from '@wordpress/editor';
import {
    BlockInspector,
    BlockList,
    BlockTools,
    WritingFlow,
    ObserveTyping,
    Sidebar,
    Bheader,
    ListViewSidebar,
    __unstableEditorStyles as EditorStyles,
    __unstableUseMouseMoveTypingReset as useMouseMoveTypingReset
} from '@wordpress/block-editor';

import { VisualEditorGlobalKeyboardShortcuts } from '@wordpress/editor';
import domReady from '@wordpress/dom-ready';
import { registerCoreBlocks } from '@wordpress/block-library';
import apiFetch from '@wordpress/api-fetch';
import { settings } from './conf';
import { createRoot } from 'react-dom/client';




function StandaloneBlockEditor({ settings: _settings }) {
    const ref = useMouseMoveTypingReset();
    const contentRef = useRef();
    return (
        <>
            <Sidebar.InspectorFill>
                <BlockInspector />
            </Sidebar.InspectorFill>
            <BlockTools className="pattern-visual-editor editor-styles-wrapper" style={{ height: '700px' }} __unstableContentRef={contentRef}>
                <EditorStyles
                    styles={_settings.styles}
                    scope=":where(.editor-styles-wrapper)"
                />
                <VisualEditorGlobalKeyboardShortcuts />
                <div className="pattern-visual-editor__post-title-wrapper">
                </div>
                <WritingFlow style={{
                    height: '100%',
                    width: '100%',
                }}>
                    <ObserveTyping>
                        <BlockList className="getdavesbe-block-editor__block-list" />
                    </ObserveTyping>
                </WritingFlow>

            </BlockTools>
        </>
    );
}
function ele(href, tex) {
    return <a href={href}>{tex}</a>;
}
function createRegistryWithStores() {
    const postTypeConfig = {
        kind: 'postType',
        name: 'post',
        baseURL: '/coustom/uri',
        transientEdits: { blocks: true, selection: true },
        mergedEdits: { meta: true },
        rawAttributes: ['title', 'excerpt', 'content'],
    };

    const postTypeEntity = {
        slug: 'post',
        rest_base: 'posts',
        labels: {
            item_updated: 'Updated Post',
            item_published: 'Post published',
            item_reverted_to_draft: 'Post reverted to draft.',
        },
    };

    const aSinglePost = {
        id: 1,
        type: 'post',
        content: {
            raw: '<p>post</p>',
            rendered: '<p>post</p>',
        },
        meta: {
            footnotes: '[]',
        },
    };
    dispatch(coreStore).addEntities([postTypeConfig]);

    dispatch(coreStore)
        .receiveEntityRecords('root', 'postType', [postTypeEntity]);

    dispatch(coreStore)
        .receiveEntityRecords('postType', 'post', [aSinglePost]);
    return aSinglePost
}

function StandaloneEditor({ settings }) {
    let [load, setLoad] = useState(false);
    let [show, setShow] = useState(true);
    const click = () => {
        setShow(!show);

    };
    let [show0, setShow0] = useState(false);
    let [edit, setEdit] = useState();
    const click0 = () => {
        setShow0(!show0);

    }
    let blocks;
    let post = 1;
    useEffect(() => {
        const aSinglePost = createRegistryWithStores();
        setEdit(aSinglePost);
        if (load == false) {
            setLoad(true);
        }

    }, [post]);


    return (
        <>
            <StrictMode>
                <ShortcutProvider>
                    {post && <EditorProvider
                        settings={settings}
                        post={edit}
                        blocks={blocks}
                        unstableTemplate={false}
                    >
                        <FullscreenMode isActive={true} />
                        <SlotFillProvider>

                            {<InterfaceSkeleton id="interfaceSkeleton"
                                header={<Bheader show={show} setShow={click} show0={show0} setShow0={click0} />}
                                blocks={blocks}
                                sidebar={show0 && <Sidebar />}
                                secondarySidebar={<ListViewSidebar className={show ? 'show' : 'hide'} />}
                                content={
                                    <>
                                        <StandaloneBlockEditor id="sBlockEditor" settings={settings} post={edit} blocks_={blocks} />
                                    </>
                                }
                            />}

                            <Popover.Slot />

                        </SlotFillProvider>
                    </EditorProvider>}
                </ShortcutProvider>

            </StrictMode>
        </>
    );
}
export function Seditor() {

    apiFetch.use((options) => {
        if (options.path.indexOf("embed") != null) {
            return "";
        } else {
            return "";
        }

    });
    domReady(function () {
        registerBlockType('core/joomla', {
            supports: {
                className: false,
            },
            category: 'text',
            attributes: {
                id: {
                    type: 'string',
                    default: '',
                },
                name: {
                    type: 'string',
                    default: '<a href = "http://localhost/">dsd</a>',
                },
                desc: {
                    type: 'string',
                    default: '',
                },
            },
            title: 'joomla extention',
            edit: ({ attributes }) => {
                const { id, name, desc } = attributes;
                let type = "";

                if (name && name.match(/modul/)) {
                    type = "joomla module";
                } else if (name && name.match(/field/)) {
                    type = "joomla field";
                } else if (name && name.match(/<a.*>/)) {
                    type = "joomla link";
                }
                let href, tex; console.log(type);
                if (type == "joomla link") {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(name, 'text/html');
                    if (doc.getElementsByTagName('a')[0]) {
                        href = doc.getElementsByTagName('a')[0].href
                        tex = doc.getElementsByTagName('a')[0].innerHTML
                    }

                }

                return (
                    <>
                        <InspectorControls>
                            {type}:<span>{name}</span>
                        </InspectorControls>
                        <div  >
                            {href ? ele(href, tex) : name}
                        </div>
                    </>
                );
            },
        });
        registerCoreBlocks();
        const container = document.getElementById('root');
        const root = createRoot(container);

        root.render(<StandaloneEditor settings={settings} />);
        let time = setInterval(() => {
            let block = document.querySelector('.block-editor-list-view-block-select-button')
            if (block) {
                block.click()
                time && clearInterval(time);
            }
        }, 200)

    });
}
export default StandaloneEditor;
