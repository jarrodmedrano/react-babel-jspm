System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system",
      "es7.decorators"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "build.js": [
      "js/app.js",
      "js/components/Page.js",
      "npm:react@15.3.2.js",
      "npm:react@15.3.2/react.js",
      "npm:react@15.3.2/lib/React.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "npm:process@0.11.9.js",
      "npm:process@0.11.9/browser.js",
      "npm:react@15.3.2/lib/ReactElementValidator.js",
      "npm:fbjs@0.8.6/lib/warning.js",
      "npm:fbjs@0.8.6/lib/emptyFunction.js",
      "npm:react@15.3.2/lib/getIteratorFn.js",
      "npm:react@15.3.2/lib/canDefineProperty.js",
      "npm:react@15.3.2/lib/checkReactTypeSpec.js",
      "npm:react@15.3.2/lib/ReactComponentTreeHook.js",
      "npm:fbjs@0.8.6/lib/invariant.js",
      "npm:react@15.3.2/lib/ReactCurrentOwner.js",
      "npm:react@15.3.2/lib/reactProdInvariant.js",
      "npm:react@15.3.2/lib/ReactPropTypesSecret.js",
      "npm:react@15.3.2/lib/ReactPropTypeLocationNames.js",
      "npm:react@15.3.2/lib/ReactPropTypeLocations.js",
      "npm:fbjs@0.8.6/lib/keyMirror.js",
      "npm:react@15.3.2/lib/ReactElement.js",
      "npm:object-assign@4.1.0.js",
      "npm:object-assign@4.1.0/index.js",
      "npm:react@15.3.2/lib/onlyChild.js",
      "npm:react@15.3.2/lib/ReactVersion.js",
      "npm:react@15.3.2/lib/ReactPropTypes.js",
      "npm:react@15.3.2/lib/ReactDOMFactories.js",
      "npm:react@15.3.2/lib/ReactClass.js",
      "npm:fbjs@0.8.6/lib/keyOf.js",
      "npm:fbjs@0.8.6/lib/emptyObject.js",
      "npm:react@15.3.2/lib/ReactNoopUpdateQueue.js",
      "npm:react@15.3.2/lib/ReactComponent.js",
      "npm:react@15.3.2/lib/ReactPureComponent.js",
      "npm:react@15.3.2/lib/ReactChildren.js",
      "npm:react@15.3.2/lib/traverseAllChildren.js",
      "npm:react@15.3.2/lib/KeyEscapeUtils.js",
      "npm:react@15.3.2/lib/PooledClass.js",
      "npm:babel-runtime@5.8.38/helpers/class-call-check.js",
      "npm:babel-runtime@5.8.38/helpers/create-class.js",
      "npm:babel-runtime@5.8.38/core-js/object/define-property.js",
      "npm:core-js@1.2.7/library/fn/object/define-property.js",
      "npm:core-js@1.2.7/library/modules/$.js",
      "npm:babel-runtime@5.8.38/helpers/inherits.js",
      "npm:babel-runtime@5.8.38/core-js/object/set-prototype-of.js",
      "npm:core-js@1.2.7/library/fn/object/set-prototype-of.js",
      "npm:core-js@1.2.7/library/modules/$.core.js",
      "npm:core-js@1.2.7/library/modules/es6.object.set-prototype-of.js",
      "npm:core-js@1.2.7/library/modules/$.set-proto.js",
      "npm:core-js@1.2.7/library/modules/$.ctx.js",
      "npm:core-js@1.2.7/library/modules/$.a-function.js",
      "npm:core-js@1.2.7/library/modules/$.an-object.js",
      "npm:core-js@1.2.7/library/modules/$.is-object.js",
      "npm:core-js@1.2.7/library/modules/$.export.js",
      "npm:core-js@1.2.7/library/modules/$.global.js",
      "npm:babel-runtime@5.8.38/core-js/object/create.js",
      "npm:core-js@1.2.7/library/fn/object/create.js",
      "npm:babel-runtime@5.8.38/helpers/get.js",
      "npm:babel-runtime@5.8.38/core-js/object/get-own-property-descriptor.js",
      "npm:core-js@1.2.7/library/fn/object/get-own-property-descriptor.js",
      "npm:core-js@1.2.7/library/modules/es6.object.get-own-property-descriptor.js",
      "npm:core-js@1.2.7/library/modules/$.object-sap.js",
      "npm:core-js@1.2.7/library/modules/$.fails.js",
      "npm:core-js@1.2.7/library/modules/$.to-iobject.js",
      "npm:core-js@1.2.7/library/modules/$.defined.js",
      "npm:core-js@1.2.7/library/modules/$.iobject.js",
      "npm:core-js@1.2.7/library/modules/$.cof.js",
      "npm:history@2.0.1.js",
      "npm:history@2.0.1/lib/index.js",
      "npm:history@2.0.1/lib/enableQueries.js",
      "npm:history@2.0.1/lib/useQueries.js",
      "npm:history@2.0.1/lib/deprecate.js",
      "npm:warning@2.1.0.js",
      "npm:warning@2.1.0/browser.js",
      "npm:history@2.0.1/lib/PathUtils.js",
      "npm:history@2.0.1/lib/runTransitionHook.js",
      "npm:query-string@3.0.3.js",
      "npm:query-string@3.0.3/index.js",
      "npm:strict-uri-encode@1.1.0.js",
      "npm:strict-uri-encode@1.1.0/index.js",
      "npm:history@2.0.1/lib/enableBeforeUnload.js",
      "npm:history@2.0.1/lib/useBeforeUnload.js",
      "npm:history@2.0.1/lib/DOMUtils.js",
      "npm:history@2.0.1/lib/ExecutionEnvironment.js",
      "npm:history@2.0.1/lib/Actions.js",
      "npm:history@2.0.1/lib/useBasename.js",
      "npm:history@2.0.1/lib/createMemoryHistory.js",
      "npm:history@2.0.1/lib/createHistory.js",
      "npm:history@2.0.1/lib/createLocation.js",
      "npm:history@2.0.1/lib/AsyncUtils.js",
      "npm:deep-equal@1.0.1.js",
      "npm:deep-equal@1.0.1/index.js",
      "npm:deep-equal@1.0.1/lib/is_arguments.js",
      "npm:deep-equal@1.0.1/lib/keys.js",
      "npm:invariant@2.2.1.js",
      "npm:invariant@2.2.1/browser.js",
      "npm:history@2.0.1/lib/createHashHistory.js",
      "npm:history@2.0.1/lib/createDOMHistory.js",
      "npm:history@2.0.1/lib/DOMStateStorage.js",
      "npm:history@2.0.1/lib/createBrowserHistory.js",
      "npm:react@15.3.2/lib/ReactCSSTransitionGroup.js",
      "npm:react@15.3.2/lib/ReactCSSTransitionGroupChild.js",
      "npm:react@15.3.2/lib/ReactTransitionEvents.js",
      "npm:react@15.3.2/lib/getVendorPrefixedEventName.js",
      "npm:fbjs@0.8.6/lib/ExecutionEnvironment.js",
      "npm:fbjs@0.8.6/lib/CSSCore.js",
      "npm:react@15.3.2/lib/ReactDOM.js",
      "npm:react@15.3.2/lib/ReactDOMNullInputValuePropHook.js",
      "npm:react@15.3.2/lib/ReactDOMUnknownPropertyHook.js",
      "npm:react@15.3.2/lib/EventPluginRegistry.js",
      "npm:react@15.3.2/lib/DOMProperty.js",
      "npm:react@15.3.2/lib/ReactInstrumentation.js",
      "npm:react@15.3.2/lib/ReactDebugTool.js",
      "npm:fbjs@0.8.6/lib/performanceNow.js",
      "npm:fbjs@0.8.6/lib/performance.js",
      "npm:react@15.3.2/lib/ReactChildrenMutationWarningHook.js",
      "npm:react@15.3.2/lib/ReactHostOperationHistoryHook.js",
      "npm:react@15.3.2/lib/ReactInvalidSetStateWarningHook.js",
      "npm:react@15.3.2/lib/renderSubtreeIntoContainer.js",
      "npm:react@15.3.2/lib/ReactMount.js",
      "npm:react@15.3.2/lib/shouldUpdateReactComponent.js",
      "npm:react@15.3.2/lib/setInnerHTML.js",
      "npm:react@15.3.2/lib/createMicrosoftUnsafeLocalFunction.js",
      "npm:react@15.3.2/lib/DOMNamespaces.js",
      "npm:react@15.3.2/lib/instantiateReactComponent.js",
      "npm:react@15.3.2/lib/ReactHostComponent.js",
      "npm:react@15.3.2/lib/ReactEmptyComponent.js",
      "npm:react@15.3.2/lib/ReactCompositeComponent.js",
      "npm:fbjs@0.8.6/lib/shallowEqual.js",
      "npm:react@15.3.2/lib/ReactReconciler.js",
      "npm:react@15.3.2/lib/ReactRef.js",
      "npm:react@15.3.2/lib/ReactOwner.js",
      "npm:react@15.3.2/lib/ReactNodeTypes.js",
      "npm:react@15.3.2/lib/ReactInstanceMap.js",
      "npm:react@15.3.2/lib/ReactErrorUtils.js",
      "npm:react@15.3.2/lib/ReactComponentEnvironment.js",
      "npm:react@15.3.2/lib/ReactUpdates.js",
      "npm:react@15.3.2/lib/Transaction.js",
      "npm:react@15.3.2/lib/ReactFeatureFlags.js",
      "npm:react@15.3.2/lib/CallbackQueue.js",
      "npm:react@15.3.2/lib/ReactUpdateQueue.js",
      "npm:react@15.3.2/lib/ReactMarkupChecksum.js",
      "npm:react@15.3.2/lib/adler32.js",
      "npm:react@15.3.2/lib/ReactDOMFeatureFlags.js",
      "npm:react@15.3.2/lib/ReactDOMContainerInfo.js",
      "npm:react@15.3.2/lib/validateDOMNesting.js",
      "npm:react@15.3.2/lib/ReactDOMComponentTree.js",
      "npm:react@15.3.2/lib/ReactDOMComponentFlags.js",
      "npm:react@15.3.2/lib/ReactBrowserEventEmitter.js",
      "npm:react@15.3.2/lib/isEventSupported.js",
      "npm:react@15.3.2/lib/ViewportMetrics.js",
      "npm:react@15.3.2/lib/ReactEventEmitterMixin.js",
      "npm:react@15.3.2/lib/EventPluginHub.js",
      "npm:react@15.3.2/lib/forEachAccumulated.js",
      "npm:react@15.3.2/lib/accumulateInto.js",
      "npm:react@15.3.2/lib/EventPluginUtils.js",
      "npm:react@15.3.2/lib/EventConstants.js",
      "npm:react@15.3.2/lib/DOMLazyTree.js",
      "npm:react@15.3.2/lib/setTextContent.js",
      "npm:react@15.3.2/lib/escapeTextContentForBrowser.js",
      "npm:react@15.3.2/lib/getHostComponentFromComposite.js",
      "npm:react@15.3.2/lib/findDOMNode.js",
      "npm:react@15.3.2/lib/ReactDefaultInjection.js",
      "npm:react@15.3.2/lib/SimpleEventPlugin.js",
      "npm:react@15.3.2/lib/getEventCharCode.js",
      "npm:react@15.3.2/lib/SyntheticWheelEvent.js",
      "npm:react@15.3.2/lib/SyntheticMouseEvent.js",
      "npm:react@15.3.2/lib/getEventModifierState.js",
      "npm:react@15.3.2/lib/SyntheticUIEvent.js",
      "npm:react@15.3.2/lib/getEventTarget.js",
      "npm:react@15.3.2/lib/SyntheticEvent.js",
      "npm:react@15.3.2/lib/SyntheticTransitionEvent.js",
      "npm:react@15.3.2/lib/SyntheticTouchEvent.js",
      "npm:react@15.3.2/lib/SyntheticDragEvent.js",
      "npm:react@15.3.2/lib/SyntheticKeyboardEvent.js",
      "npm:react@15.3.2/lib/getEventKey.js",
      "npm:react@15.3.2/lib/SyntheticFocusEvent.js",
      "npm:react@15.3.2/lib/SyntheticClipboardEvent.js",
      "npm:react@15.3.2/lib/SyntheticAnimationEvent.js",
      "npm:react@15.3.2/lib/EventPropagators.js",
      "npm:fbjs@0.8.6/lib/EventListener.js",
      "npm:react@15.3.2/lib/SelectEventPlugin.js",
      "npm:react@15.3.2/lib/isTextInputElement.js",
      "npm:fbjs@0.8.6/lib/getActiveElement.js",
      "npm:react@15.3.2/lib/ReactInputSelection.js",
      "npm:fbjs@0.8.6/lib/focusNode.js",
      "npm:fbjs@0.8.6/lib/containsNode.js",
      "npm:fbjs@0.8.6/lib/isTextNode.js",
      "npm:fbjs@0.8.6/lib/isNode.js",
      "npm:react@15.3.2/lib/ReactDOMSelection.js",
      "npm:react@15.3.2/lib/getTextContentAccessor.js",
      "npm:react@15.3.2/lib/getNodeForCharacterOffset.js",
      "npm:react@15.3.2/lib/SVGDOMPropertyConfig.js",
      "npm:react@15.3.2/lib/ReactReconcileTransaction.js",
      "npm:react@15.3.2/lib/ReactInjection.js",
      "npm:react@15.3.2/lib/ReactEventListener.js",
      "npm:fbjs@0.8.6/lib/getUnboundedScrollPosition.js",
      "npm:react@15.3.2/lib/ReactDefaultBatchingStrategy.js",
      "npm:react@15.3.2/lib/ReactDOMTextComponent.js",
      "npm:react@15.3.2/lib/DOMChildrenOperations.js",
      "npm:react@15.3.2/lib/ReactMultiChildUpdateTypes.js",
      "npm:react@15.3.2/lib/Danger.js",
      "npm:fbjs@0.8.6/lib/createNodesFromMarkup.js",
      "npm:fbjs@0.8.6/lib/getMarkupWrap.js",
      "npm:fbjs@0.8.6/lib/createArrayFromMixed.js",
      "npm:react@15.3.2/lib/ReactDOMTreeTraversal.js",
      "npm:react@15.3.2/lib/ReactDOMEmptyComponent.js",
      "npm:react@15.3.2/lib/ReactDOMComponent.js",
      "npm:react@15.3.2/lib/ReactServerRenderingTransaction.js",
      "npm:react@15.3.2/lib/ReactServerUpdateQueue.js",
      "npm:react@15.3.2/lib/ReactMultiChild.js",
      "npm:react@15.3.2/lib/flattenChildren.js",
      "npm:react@15.3.2/lib/ReactChildReconciler.js",
      "npm:react@15.3.2/lib/ReactDOMTextarea.js",
      "npm:react@15.3.2/lib/LinkedValueUtils.js",
      "npm:react@15.3.2/lib/DisabledInputUtils.js",
      "npm:react@15.3.2/lib/ReactDOMSelect.js",
      "npm:react@15.3.2/lib/ReactDOMOption.js",
      "npm:react@15.3.2/lib/ReactDOMInput.js",
      "npm:react@15.3.2/lib/DOMPropertyOperations.js",
      "npm:react@15.3.2/lib/quoteAttributeValueForBrowser.js",
      "npm:react@15.3.2/lib/ReactDOMButton.js",
      "npm:react@15.3.2/lib/CSSPropertyOperations.js",
      "npm:fbjs@0.8.6/lib/memoizeStringOnly.js",
      "npm:fbjs@0.8.6/lib/hyphenateStyleName.js",
      "npm:fbjs@0.8.6/lib/hyphenate.js",
      "npm:react@15.3.2/lib/dangerousStyleValue.js",
      "npm:react@15.3.2/lib/CSSProperty.js",
      "npm:fbjs@0.8.6/lib/camelizeStyleName.js",
      "npm:fbjs@0.8.6/lib/camelize.js",
      "npm:react@15.3.2/lib/AutoFocusUtils.js",
      "npm:react@15.3.2/lib/ReactComponentBrowserEnvironment.js",
      "npm:react@15.3.2/lib/ReactDOMIDOperations.js",
      "npm:react@15.3.2/lib/HTMLDOMPropertyConfig.js",
      "npm:react@15.3.2/lib/EnterLeaveEventPlugin.js",
      "npm:react@15.3.2/lib/DefaultEventPluginOrder.js",
      "npm:react@15.3.2/lib/ChangeEventPlugin.js",
      "npm:react@15.3.2/lib/BeforeInputEventPlugin.js",
      "npm:react@15.3.2/lib/SyntheticInputEvent.js",
      "npm:react@15.3.2/lib/SyntheticCompositionEvent.js",
      "npm:react@15.3.2/lib/FallbackCompositionState.js",
      "npm:react@15.3.2/lib/ReactTransitionGroup.js",
      "npm:react@15.3.2/lib/ReactTransitionChildMapping.js",
      "npm:react-router@2.6.0.js",
      "npm:react-router@2.6.0/lib/index.js",
      "npm:react-router@2.6.0/lib/createMemoryHistory.js",
      "npm:history@2.1.2/lib/createMemoryHistory.js",
      "npm:history@2.1.2/lib/createHistory.js",
      "npm:history@2.1.2/lib/deprecate.js",
      "npm:history@2.1.2/lib/runTransitionHook.js",
      "npm:history@2.1.2/lib/createLocation.js",
      "npm:history@2.1.2/lib/PathUtils.js",
      "npm:history@2.1.2/lib/Actions.js",
      "npm:history@2.1.2/lib/AsyncUtils.js",
      "npm:history@2.1.2/lib/useBasename.js",
      "npm:history@2.1.2/lib/ExecutionEnvironment.js",
      "npm:history@2.1.2/lib/useQueries.js",
      "npm:react-router@2.6.0/lib/hashHistory.js",
      "npm:react-router@2.6.0/lib/createRouterHistory.js",
      "npm:react-router@2.6.0/lib/useRouterHistory.js",
      "npm:history@2.1.2/lib/createHashHistory.js",
      "npm:history@2.1.2/lib/createDOMHistory.js",
      "npm:history@2.1.2/lib/DOMUtils.js",
      "npm:history@2.1.2/lib/DOMStateStorage.js",
      "npm:react-router@2.6.0/lib/browserHistory.js",
      "npm:history@2.1.2/lib/createBrowserHistory.js",
      "npm:react-router@2.6.0/lib/applyRouterMiddleware.js",
      "npm:react-router@2.6.0/lib/RouterContext.js",
      "npm:react-router@2.6.0/lib/routerWarning.js",
      "npm:warning@3.0.0.js",
      "npm:warning@3.0.0/browser.js",
      "npm:react-router@2.6.0/lib/RouteUtils.js",
      "npm:react-router@2.6.0/lib/getRouteParams.js",
      "npm:react-router@2.6.0/lib/PatternUtils.js",
      "npm:react-router@2.6.0/lib/deprecateObjectProperties.js",
      "npm:react-router@2.6.0/lib/match.js",
      "npm:react-router@2.6.0/lib/RouterUtils.js",
      "npm:react-router@2.6.0/lib/createTransitionManager.js",
      "npm:react-router@2.6.0/lib/matchRoutes.js",
      "npm:react-router@2.6.0/lib/makeStateWithLocation.js",
      "npm:react-router@2.6.0/lib/AsyncUtils.js",
      "npm:react-router@2.6.0/lib/getComponents.js",
      "npm:react-router@2.6.0/lib/isActive.js",
      "npm:react-router@2.6.0/lib/TransitionUtils.js",
      "npm:react-router@2.6.0/lib/computeChangedRoutes.js",
      "npm:react-router@2.6.0/lib/RoutingContext.js",
      "npm:react-router@2.6.0/lib/useRoutes.js",
      "npm:react-router@2.6.0/lib/RouteContext.js",
      "npm:react-router@2.6.0/lib/Lifecycle.js",
      "npm:react-router@2.6.0/lib/History.js",
      "npm:react-router@2.6.0/lib/InternalPropTypes.js",
      "npm:react-router@2.6.0/lib/Route.js",
      "npm:react-router@2.6.0/lib/Redirect.js",
      "npm:react-router@2.6.0/lib/IndexRoute.js",
      "npm:react-router@2.6.0/lib/IndexRedirect.js",
      "npm:react-router@2.6.0/lib/withRouter.js",
      "npm:react-router@2.6.0/lib/PropTypes.js",
      "npm:hoist-non-react-statics@1.2.0.js",
      "npm:hoist-non-react-statics@1.2.0/index.js",
      "npm:react-router@2.6.0/lib/IndexLink.js",
      "npm:react-router@2.6.0/lib/Link.js",
      "npm:react-router@2.6.0/lib/Router.js",
      "npm:react-dom@15.3.2.js",
      "npm:react-dom@15.3.2/index.js"
    ]
  },

  map: {
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "capaj/systemjs-hot-reloader": "github:capaj/systemjs-hot-reloader@0.6.0",
    "classnames": "npm:classnames@2.2.5",
    "clean-css": "npm:clean-css@3.4.20",
    "core-js": "npm:core-js@1.2.7",
    "css": "github:systemjs/plugin-css@0.1.32",
    "history": "npm:history@2.0.1",
    "json": "github:systemjs/plugin-json@0.2.2",
    "lodash": "npm:lodash@4.16.6",
    "mobx": "npm:mobx@2.4.0",
    "mobx-react": "npm:mobx-react@3.5.1",
    "picturefill": "npm:picturefill@3.0.2",
    "react": "npm:react@15.3.2",
    "react-dom": "npm:react-dom@15.3.2",
    "react-intl": "npm:react-intl@2.1.3",
    "react-router": "npm:react-router@2.6.0",
    "react-scroll": "npm:react-scroll@1.4.4",
    "sass": "npm:sass@0.5.0",
    "scss": "github:mobilexag/plugin-sass@0.4.6",
    "github:capaj/systemjs-hot-reloader@0.6.0": {
      "debug": "npm:debug@2.2.0",
      "socket.io-client": "github:socketio/socket.io-client@1.4.8",
      "weakee": "npm:weakee@1.0.0"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.0"
    },
    "github:jspm/nodelibs-domain@0.1.0": {
      "domain-browser": "npm:domain-browser@1.1.7"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.9"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "github:mobilexag/plugin-sass@0.4.6": {
      "autoprefixer": "npm:autoprefixer@6.5.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "lodash": "npm:lodash@4.16.6",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "postcss": "npm:postcss@5.2.5",
      "reqwest": "github:ded/reqwest@2.0.5",
      "sass.js": "npm:sass.js@0.9.13",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:amdefine@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asap@2.0.5": {
      "domain": "github:jspm/nodelibs-domain@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asn1.js@4.9.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:autoprefixer@6.5.3": {
      "browserslist": "npm:browserslist@1.4.0",
      "caniuse-db": "npm:caniuse-db@1.0.30000580",
      "normalize-range": "npm:normalize-range@0.1.2",
      "num2fraction": "npm:num2fraction@1.2.2",
      "postcss": "npm:postcss@5.2.5",
      "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bn.js@4.11.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:browserify-aes@1.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.3",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:browserify-rsa@4.0.1": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:browserify-sign@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.3.2",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.9",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.2.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:browserslist@1.4.0": {
      "caniuse-db": "npm:caniuse-db@1.0.30000580",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:buffer-shims@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.8",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:chalk@1.1.3": {
      "ansi-styles": "npm:ansi-styles@2.2.1",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
      "has-ansi": "npm:has-ansi@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-ansi": "npm:strip-ansi@3.0.1",
      "supports-color": "npm:supports-color@2.0.0"
    },
    "npm:cipher-base@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:clean-css@3.4.20": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.8.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.4.4",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.8.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.3.2"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.8"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.11.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.0",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@5.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.9",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:debug@2.2.0": {
      "ms": "npm:ms@0.7.1"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:diffie-hellman@5.0.2": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:domain-browser@1.1.7": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:elliptic@6.3.2": {
      "bn.js": "npm:bn.js@4.11.6",
      "brorand": "npm:brorand@1.0.6",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:encoding@0.1.12": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "iconv-lite": "npm:iconv-lite@0.4.13"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:fbjs@0.8.6": {
      "core-js": "npm:core-js@1.2.7",
      "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
      "loose-envify": "npm:loose-envify@1.3.0",
      "object-assign": "npm:object-assign@4.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise": "npm:promise@7.1.1",
      "ua-parser-js": "npm:ua-parser-js@0.7.12"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:has-ansi@2.0.0": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:has-flag@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:history@2.0.1": {
      "deep-equal": "npm:deep-equal@1.0.1",
      "invariant": "npm:invariant@2.2.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "query-string": "npm:query-string@3.0.3",
      "warning": "npm:warning@2.1.0"
    },
    "npm:history@2.1.2": {
      "deep-equal": "npm:deep-equal@1.0.1",
      "invariant": "npm:invariant@2.2.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "query-string": "npm:query-string@3.0.3",
      "warning": "npm:warning@2.1.0"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:iconv-lite@0.4.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:intl-messageformat@1.3.0": {
      "intl-messageformat-parser": "npm:intl-messageformat-parser@1.2.0"
    },
    "npm:intl-relativeformat@1.3.0": {
      "intl-messageformat": "npm:intl-messageformat@1.3.0"
    },
    "npm:invariant@2.2.1": {
      "loose-envify": "npm:loose-envify@1.3.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:isarray@1.0.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:isomorphic-fetch@2.2.1": {
      "node-fetch": "npm:node-fetch@1.6.3",
      "whatwg-fetch": "npm:whatwg-fetch@2.0.0"
    },
    "npm:js-base64@2.1.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:loose-envify@1.3.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-tokens": "npm:js-tokens@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "brorand": "npm:brorand@1.0.6"
    },
    "npm:mobx-react@3.5.1": {
      "mobx": "npm:mobx@2.4.0"
    },
    "npm:node-fetch@1.6.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "encoding": "npm:encoding@0.1.12",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "is-stream": "npm:is-stream@1.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:pako@0.2.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:parse-asn1@5.0.0": {
      "asn1.js": "npm:asn1.js@4.9.0",
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.9",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:picturefill@3.0.2": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0"
    },
    "npm:postcss@5.2.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "chalk": "npm:chalk@1.1.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-base64": "npm:js-base64@2.1.9",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.6",
      "supports-color": "npm:supports-color@3.1.2"
    },
    "npm:process-nextick-args@1.0.7": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:process@0.11.9": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:promise@7.1.1": {
      "asap": "npm:asap@2.0.5",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:query-string@3.0.3": {
      "strict-uri-encode": "npm:strict-uri-encode@1.1.0"
    },
    "npm:randombytes@2.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:react-dom@15.3.2": {
      "react": "npm:react@15.3.2"
    },
    "npm:react-intl@2.1.3": {
      "intl-format-cache": "npm:intl-format-cache@2.0.5",
      "intl-messageformat": "npm:intl-messageformat@1.3.0",
      "intl-relativeformat": "npm:intl-relativeformat@1.3.0",
      "invariant": "npm:invariant@2.2.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@15.3.2"
    },
    "npm:react-router@2.6.0": {
      "history": "npm:history@2.1.2",
      "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0",
      "invariant": "npm:invariant@2.2.1",
      "loose-envify": "npm:loose-envify@1.3.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@15.3.2",
      "warning": "npm:warning@3.0.0"
    },
    "npm:react-scroll@1.4.4": {
      "object-assign": "npm:object-assign@4.1.0",
      "react": "npm:react@15.3.2",
      "react-dom": "npm:react-dom@15.3.2"
    },
    "npm:react@15.3.2": {
      "fbjs": "npm:fbjs@0.8.6",
      "loose-envify": "npm:loose-envify@1.3.0",
      "object-assign": "npm:object-assign@4.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.2.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-shims": "npm:buffer-shims@1.0.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.7",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sass.js@0.9.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sass@0.5.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "sys": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:sha.js@2.4.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.5.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:strip-ansi@3.0.1": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:supports-color@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:supports-color@3.1.2": {
      "has-flag": "npm:has-flag@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ua-parser-js@0.7.12": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:warning@2.1.0": {
      "loose-envify": "npm:loose-envify@1.3.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:warning@3.0.0": {
      "loose-envify": "npm:loose-envify@1.3.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
