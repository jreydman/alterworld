(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/08b5e__pnpm_0e544b._.js", {

"[project]/node_modules/.pnpm/next@14.2.3_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.3_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        var React = __turbopack_require__("[project]/node_modules/.pnpm/next@14.2.3_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        // ATTENTION
        // When adding new symbols to this file,
        // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
        // The Symbol used to tag the ReactElement-like types.
        var REACT_ELEMENT_TYPE = Symbol.for('react.element');
        var REACT_PORTAL_TYPE = Symbol.for('react.portal');
        var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
        var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
        var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
        var REACT_PROVIDER_TYPE = Symbol.for('react.provider'); // TODO: Delete with enableRenderableContext
        var REACT_CONSUMER_TYPE = Symbol.for('react.consumer');
        var REACT_CONTEXT_TYPE = Symbol.for('react.context');
        var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
        var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
        var REACT_MEMO_TYPE = Symbol.for('react.memo');
        var REACT_LAZY_TYPE = Symbol.for('react.lazy');
        var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
        var REACT_CACHE_TYPE = Symbol.for('react.cache');
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = '@@iterator';
        function getIteratorFn(maybeIterable) {
            if (maybeIterable === null || typeof maybeIterable !== 'object') {
                return null;
            }
            var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
            if (typeof maybeIterator === 'function') {
                return maybeIterator;
            }
            return null;
        }
        var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
            {
                {
                    for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++){
                        args[_key2 - 1] = arguments[_key2];
                    }
                    printWarning('error', format, args);
                }
            }
        }
        function printWarning(level, format, args) {
            // When changing this logic, you might want to also
            // update consoleWithStackDev.www.js as well.
            {
                var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
                var stack = ReactDebugCurrentFrame.getStackAddendum();
                if (stack !== '') {
                    format += '%s';
                    args = args.concat([
                        stack
                    ]);
                } // eslint-disable-next-line react-internal/safe-string-coercion
                var argsWithFormat = args.map(function(item) {
                    return String(item);
                }); // Careful: RN currently depends on this prefix
                argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
                // breaks IE9: https://github.com/facebook/react/issues/13610
                // eslint-disable-next-line react-internal/no-production-logging
                Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
        }
        // -----------------------------------------------------------------------------
        var enableScopeAPI = false; // Experimental Create Event Handle API.
        var enableCacheElement = false;
        var enableTransitionTracing = false; // No known bugs, but needs performance testing
        var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
        var enableRenderableContext = false;
        // stuff. Intended to enable React core members to more easily debug scheduling
        // issues in DEV builds.
        var enableDebugTracing = false;
        function getWrappedName(outerType, innerType, wrapperName) {
            var displayName = outerType.displayName;
            if (displayName) {
                return displayName;
            }
            var functionName = innerType.displayName || innerType.name || '';
            return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
        } // Keep in sync with react-reconciler/getComponentNameFromFiber
        function getContextName(type) {
            return type.displayName || 'Context';
        }
        var REACT_CLIENT_REFERENCE$2 = Symbol.for('react.client.reference'); // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.
        function getComponentNameFromType(type) {
            if (type == null) {
                // Host root, text node or just invalid type.
                return null;
            }
            if (typeof type === 'function') {
                if (type.$$typeof === REACT_CLIENT_REFERENCE$2) {
                    // TODO: Create a convention for naming client references with debug info.
                    return null;
                }
                return type.displayName || type.name || null;
            }
            if (typeof type === 'string') {
                return type;
            }
            switch(type){
                case REACT_FRAGMENT_TYPE:
                    return 'Fragment';
                case REACT_PORTAL_TYPE:
                    return 'Portal';
                case REACT_PROFILER_TYPE:
                    return 'Profiler';
                case REACT_STRICT_MODE_TYPE:
                    return 'StrictMode';
                case REACT_SUSPENSE_TYPE:
                    return 'Suspense';
                case REACT_SUSPENSE_LIST_TYPE:
                    return 'SuspenseList';
                case REACT_CACHE_TYPE:
                    {
                        return 'Cache';
                    }
            }
            if (typeof type === 'object') {
                {
                    if (typeof type.tag === 'number') {
                        error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
                    }
                }
                switch(type.$$typeof){
                    case REACT_PROVIDER_TYPE:
                        {
                            var provider = type;
                            return getContextName(provider._context) + '.Provider';
                        }
                    case REACT_CONTEXT_TYPE:
                        var context = type;
                        {
                            return getContextName(context) + '.Consumer';
                        }
                    case REACT_CONSUMER_TYPE:
                        {
                            return null;
                        }
                    case REACT_FORWARD_REF_TYPE:
                        return getWrappedName(type, type.render, 'ForwardRef');
                    case REACT_MEMO_TYPE:
                        var outerName = type.displayName || null;
                        if (outerName !== null) {
                            return outerName;
                        }
                        return getComponentNameFromType(type.type) || 'Memo';
                    case REACT_LAZY_TYPE:
                        {
                            var lazyComponent = type;
                            var payload = lazyComponent._payload;
                            var init = lazyComponent._init;
                            try {
                                return getComponentNameFromType(init(payload));
                            } catch (x) {
                                return null;
                            }
                        }
                }
            }
            return null;
        }
        // $FlowFixMe[method-unbinding]
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var assign = Object.assign;
        /*
 * The `'' + value` pattern (used in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */ // $FlowFixMe[incompatible-return] only called in DEV, so void return is not possible.
        function typeName(value) {
            {
                // toStringTag is needed for namespaced types like Temporal.Instant
                var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
                var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object'; // $FlowFixMe[incompatible-return]
                return type;
            }
        } // $FlowFixMe[incompatible-return] only called in DEV, so void return is not possible.
        function willCoercionThrow(value) {
            {
                try {
                    testStringCoercion(value);
                    return false;
                } catch (e) {
                    return true;
                }
            }
        }
        function testStringCoercion(value) {
            // If you ended up here by following an exception call stack, here's what's
            // happened: you supplied an object or symbol value to React (as a prop, key,
            // DOM attribute, CSS property, string ref, etc.) and when React tried to
            // coerce it to a string using `'' + value`, an exception was thrown.
            //
            // The most common types that will cause this exception are `Symbol` instances
            // and Temporal objects like `Temporal.Instant`. But any object that has a
            // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
            // exception. (Library authors do this to prevent users from using built-in
            // numeric operators like `+` or comparison operators like `>=` because custom
            // methods are needed to perform accurate arithmetic or comparison.)
            //
            // To fix the problem, coerce this object or symbol value to a string before
            // passing it to React. The most reliable way is usually `String(value)`.
            //
            // To find which value is throwing, check the browser or debugger console.
            // Before this exception was thrown, there should be `console.error` output
            // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
            // problem and how that type was used: key, atrribute, input value prop, etc.
            // In most cases, this console output also shows the component and its
            // ancestor components where the exception happened.
            //
            // eslint-disable-next-line react-internal/safe-string-coercion
            return '' + value;
        }
        function checkKeyStringCoercion(value) {
            {
                if (willCoercionThrow(value)) {
                    error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before using it here.', typeName(value));
                    return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
                }
            }
        }
        var REACT_CLIENT_REFERENCE$1 = Symbol.for('react.client.reference');
        function isValidElementType(type) {
            if (typeof type === 'string' || typeof type === 'function') {
                return true;
            } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).
            if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
                return true;
            }
            if (typeof type === 'object' && type !== null) {
                if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || enableRenderableContext || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
                // types supported by any Flight configuration anywhere since
                // we don't know which Flight build this will end up being used
                // with.
                type.$$typeof === REACT_CLIENT_REFERENCE$1 || type.getModuleId !== undefined) {
                    return true;
                }
            }
            return false;
        }
        var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare
        function isArray(a) {
            return isArrayImpl(a);
        }
        // Helpers to patch console.logs to avoid logging during side-effect free
        // replaying on render function. This currently only patches the object
        // lazily which won't cover if the log function was extracted eagerly.
        // We could also eagerly patch the method.
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {}
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
            {
                if (disabledDepth === 0) {
                    /* eslint-disable react-internal/no-production-logging */ prevLog = console.log;
                    prevInfo = console.info;
                    prevWarn = console.warn;
                    prevError = console.error;
                    prevGroup = console.group;
                    prevGroupCollapsed = console.groupCollapsed;
                    prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099
                    var props = {
                        configurable: true,
                        enumerable: true,
                        value: disabledLog,
                        writable: true
                    }; // $FlowFixMe[cannot-write] Flow thinks console is immutable.
                    Object.defineProperties(console, {
                        info: props,
                        log: props,
                        warn: props,
                        error: props,
                        group: props,
                        groupCollapsed: props,
                        groupEnd: props
                    });
                /* eslint-enable react-internal/no-production-logging */ }
                disabledDepth++;
            }
        }
        function reenableLogs() {
            {
                disabledDepth--;
                if (disabledDepth === 0) {
                    /* eslint-disable react-internal/no-production-logging */ var props = {
                        configurable: true,
                        enumerable: true,
                        writable: true
                    }; // $FlowFixMe[cannot-write] Flow thinks console is immutable.
                    Object.defineProperties(console, {
                        log: assign({}, props, {
                            value: prevLog
                        }),
                        info: assign({}, props, {
                            value: prevInfo
                        }),
                        warn: assign({}, props, {
                            value: prevWarn
                        }),
                        error: assign({}, props, {
                            value: prevError
                        }),
                        group: assign({}, props, {
                            value: prevGroup
                        }),
                        groupCollapsed: assign({}, props, {
                            value: prevGroupCollapsed
                        }),
                        groupEnd: assign({}, props, {
                            value: prevGroupEnd
                        })
                    });
                /* eslint-enable react-internal/no-production-logging */ }
                if (disabledDepth < 0) {
                    error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
                }
            }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, ownerFn) {
            {
                if (prefix === undefined) {
                    // Extract the VM specific prefix used by each line.
                    try {
                        throw Error();
                    } catch (x) {
                        var match = x.stack.trim().match(/\n( *(at )?)/);
                        prefix = match && match[1] || '';
                    }
                } // We use the prefix to ensure our stacks line up with native stack frames.
                return '\n' + prefix + name;
            }
        }
        var reentry = false;
        var componentFrameCache;
        {
            var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
            componentFrameCache = new PossiblyWeakMap();
        }
        /**
 * Leverages native browser/VM stack frames to get proper details (e.g.
 * filename, line + col number) for a single component in a component stack. We
 * do this by:
 *   (1) throwing and catching an error in the function - this will be our
 *       control error.
 *   (2) calling the component which will eventually throw an error that we'll
 *       catch - this will be our sample error.
 *   (3) diffing the control and sample error stacks to find the stack frame
 *       which represents our component.
 */ function describeNativeComponentFrame(fn, construct) {
            // If something asked for a stack inside a fake render, it should get ignored.
            if (!fn || reentry) {
                return '';
            }
            {
                var frame = componentFrameCache.get(fn);
                if (frame !== undefined) {
                    return frame;
                }
            }
            reentry = true;
            var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe[incompatible-type] It does accept undefined.
            Error.prepareStackTrace = undefined;
            var previousDispatcher;
            {
                previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
                // for warnings.
                ReactCurrentDispatcher.current = null;
                disableLogs();
            }
            /**
   * Finding a common stack frame between sample and control errors can be
   * tricky given the different types and levels of stack trace truncation from
   * different JS VMs. So instead we'll attempt to control what that common
   * frame should be through this object method:
   * Having both the sample and control errors be in the function under the
   * `DescribeNativeComponentFrameRoot` property, + setting the `name` and
   * `displayName` properties of the function ensures that a stack
   * frame exists that has the method name `DescribeNativeComponentFrameRoot` in
   * it for both control and sample stacks.
   */ var RunInRootFrame = {
                DetermineComponentFrameRoot: function() {
                    var control;
                    try {
                        // This should throw.
                        if (construct) {
                            // Something should be setting the props in the constructor.
                            var Fake = function() {
                                throw Error();
                            }; // $FlowFixMe[prop-missing]
                            Object.defineProperty(Fake.prototype, 'props', {
                                set: function() {
                                    // We use a throwing setter instead of frozen or non-writable props
                                    // because that won't throw in a non-strict mode function.
                                    throw Error();
                                }
                            });
                            if (typeof Reflect === 'object' && Reflect.construct) {
                                // We construct a different control for this case to include any extra
                                // frames added by the construct call.
                                try {
                                    Reflect.construct(Fake, []);
                                } catch (x) {
                                    control = x;
                                }
                                Reflect.construct(fn, [], Fake);
                            } else {
                                try {
                                    Fake.call();
                                } catch (x) {
                                    control = x;
                                } // $FlowFixMe[prop-missing] found when upgrading Flow
                                fn.call(Fake.prototype);
                            }
                        } else {
                            try {
                                throw Error();
                            } catch (x) {
                                control = x;
                            } // TODO(luna): This will currently only throw if the function component
                            // tries to access React/ReactDOM/props. We should probably make this throw
                            // in simple components too
                            var maybePromise = fn(); // If the function component returns a promise, it's likely an async
                            // component, which we don't yet support. Attach a noop catch handler to
                            // silence the error.
                            // TODO: Implement component stacks for async client components?
                            if (maybePromise && typeof maybePromise.catch === 'function') {
                                maybePromise.catch(function() {});
                            }
                        }
                    } catch (sample) {
                        // This is inlined manually because closure doesn't do it for us.
                        if (sample && control && typeof sample.stack === 'string') {
                            return [
                                sample.stack,
                                control.stack
                            ];
                        }
                    }
                    return [
                        null,
                        null
                    ];
                }
            }; // $FlowFixMe[prop-missing]
            RunInRootFrame.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
            var namePropDescriptor = Object.getOwnPropertyDescriptor(RunInRootFrame.DetermineComponentFrameRoot, 'name'); // Before ES6, the `name` property was not configurable.
            if (namePropDescriptor && namePropDescriptor.configurable) {
                // V8 utilizes a function's `name` property when generating a stack trace.
                Object.defineProperty(RunInRootFrame.DetermineComponentFrameRoot, // is set to `false`.
                // $FlowFixMe[cannot-write]
                'name', {
                    value: 'DetermineComponentFrameRoot'
                });
            }
            try {
                var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
                if (sampleStack && controlStack) {
                    // This extracts the first frame from the sample that isn't also in the control.
                    // Skipping one frame that we assume is the frame that calls the two.
                    var sampleLines = sampleStack.split('\n');
                    var controlLines = controlStack.split('\n');
                    var s = 0;
                    var c = 0;
                    while(s < sampleLines.length && !sampleLines[s].includes('DetermineComponentFrameRoot')){
                        s++;
                    }
                    while(c < controlLines.length && !controlLines[c].includes('DetermineComponentFrameRoot')){
                        c++;
                    } // We couldn't find our intentionally injected common root frame, attempt
                    // to find another common root frame by search from the bottom of the
                    // control stack...
                    if (s === sampleLines.length || c === controlLines.length) {
                        s = sampleLines.length - 1;
                        c = controlLines.length - 1;
                        while(s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]){
                            // We expect at least one stack frame to be shared.
                            // Typically this will be the root most one. However, stack frames may be
                            // cut off due to maximum stack limits. In this case, one maybe cut off
                            // earlier than the other. We assume that the sample is longer or the same
                            // and there for cut off earlier. So we should find the root most frame in
                            // the sample somewhere in the control.
                            c--;
                        }
                    }
                    for(; s >= 1 && c >= 0; s--, c--){
                        // Next we find the first one that isn't the same which should be the
                        // frame that called our sample function and the control.
                        if (sampleLines[s] !== controlLines[c]) {
                            // In V8, the first line is describing the message but other VMs don't.
                            // If we're about to return the first line, and the control is also on the same
                            // line, that's a pretty good indicator that our sample threw at same line as
                            // the control. I.e. before we entered the sample frame. So we ignore this result.
                            // This can happen if you passed a class to function component, or non-function.
                            if (s !== 1 || c !== 1) {
                                do {
                                    s--;
                                    c--; // We may still have similar intermediate frames from the construct call.
                                    // The next one that isn't the same should be our match though.
                                    if (c < 0 || sampleLines[s] !== controlLines[c]) {
                                        // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                                        var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                                        // but we have a user-provided "displayName"
                                        // splice it in to make the stack more readable.
                                        if (fn.displayName && _frame.includes('<anonymous>')) {
                                            _frame = _frame.replace('<anonymous>', fn.displayName);
                                        }
                                        if ("TURBOPACK compile-time truthy", 1) {
                                            if (typeof fn === 'function') {
                                                componentFrameCache.set(fn, _frame);
                                            }
                                        } // Return the line we found.
                                        return _frame;
                                    }
                                }while (s >= 1 && c >= 0)
                            }
                            break;
                        }
                    }
                }
            } finally{
                reentry = false;
                {
                    ReactCurrentDispatcher.current = previousDispatcher;
                    reenableLogs();
                }
                Error.prepareStackTrace = previousPrepareStackTrace;
            } // Fallback to just using the name if we couldn't make it throw.
            var name = fn ? fn.displayName || fn.name : '';
            var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
            {
                if (typeof fn === 'function') {
                    componentFrameCache.set(fn, syntheticFrame);
                }
            }
            return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, ownerFn) {
            {
                return describeNativeComponentFrame(fn, false);
            }
        }
        function shouldConstruct(Component) {
            var prototype = Component.prototype;
            return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, ownerFn) {
            if (type == null) {
                return '';
            }
            if (typeof type === 'function') {
                {
                    return describeNativeComponentFrame(type, shouldConstruct(type));
                }
            }
            if (typeof type === 'string') {
                return describeBuiltInComponentFrame(type);
            }
            switch(type){
                case REACT_SUSPENSE_TYPE:
                    return describeBuiltInComponentFrame('Suspense');
                case REACT_SUSPENSE_LIST_TYPE:
                    return describeBuiltInComponentFrame('SuspenseList');
            }
            if (typeof type === 'object') {
                switch(type.$$typeof){
                    case REACT_FORWARD_REF_TYPE:
                        return describeFunctionComponentFrame(type.render);
                    case REACT_MEMO_TYPE:
                        // Memo may contain any component type so we recursively resolve it.
                        return describeUnknownElementTypeFrameInDEV(type.type, ownerFn);
                    case REACT_LAZY_TYPE:
                        {
                            var lazyComponent = type;
                            var payload = lazyComponent._payload;
                            var init = lazyComponent._init;
                            try {
                                // Lazy may contain any component type so we recursively resolve it.
                                return describeUnknownElementTypeFrameInDEV(init(payload), ownerFn);
                            } catch (x) {}
                        }
                }
            }
            return '';
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        var REACT_CLIENT_REFERENCE = Symbol.for('react.client.reference');
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
            didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
            {
                if (hasOwnProperty.call(config, 'ref')) {
                    var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
                    if (getter && getter.isReactWarning) {
                        return false;
                    }
                }
            }
            return config.ref !== undefined;
        }
        function hasValidKey(config) {
            {
                if (hasOwnProperty.call(config, 'key')) {
                    var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
                    if (getter && getter.isReactWarning) {
                        return false;
                    }
                }
            }
            return config.key !== undefined;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self) {
            {
                if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
                    var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
                    if (!didWarnAboutStringRefs[componentName]) {
                        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                        didWarnAboutStringRefs[componentName] = true;
                    }
                }
            }
        }
        function defineKeyPropWarningGetter(props, displayName) {
            {
                var warnAboutAccessingKey = function() {
                    if (!specialPropKeyWarningShown) {
                        specialPropKeyWarningShown = true;
                        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
                    }
                };
                warnAboutAccessingKey.isReactWarning = true;
                Object.defineProperty(props, 'key', {
                    get: warnAboutAccessingKey,
                    configurable: true
                });
            }
        }
        function defineRefPropWarningGetter(props, displayName) {
            {
                {
                    var warnAboutAccessingRef = function() {
                        if (!specialPropRefWarningShown) {
                            specialPropRefWarningShown = true;
                            error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
                        }
                    };
                    warnAboutAccessingRef.isReactWarning = true;
                    Object.defineProperty(props, 'ref', {
                        get: warnAboutAccessingRef,
                        configurable: true
                    });
                }
            }
        }
        /**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */ function ReactElement(type, key, _ref, self, source, owner, props) {
            var ref;
            {
                ref = _ref;
            }
            var element;
            {
                // In prod, `ref` is a regular property. It will be removed in a
                // future release.
                element = {
                    // This tag allows us to uniquely identify this as a React Element
                    $$typeof: REACT_ELEMENT_TYPE,
                    // Built-in properties that belong on the element
                    type: type,
                    key: key,
                    ref: ref,
                    props: props,
                    // Record the component responsible for creating this element.
                    _owner: owner
                };
            }
            {
                // The validation flag is currently mutative. We put it on
                // an external backing store so that we can freeze the whole object.
                // This can be replaced with a WeakMap once they are implemented in
                // commonly used development environments.
                element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
                // the validation flag non-enumerable (where possible, which should
                // include every environment we run tests in), so the test framework
                // ignores it.
                Object.defineProperty(element._store, 'validated', {
                    configurable: false,
                    enumerable: false,
                    writable: true,
                    value: false
                }); // debugInfo contains Server Component debug information.
                Object.defineProperty(element, '_debugInfo', {
                    configurable: false,
                    enumerable: false,
                    writable: true,
                    value: null
                });
                if (Object.freeze) {
                    Object.freeze(element.props);
                    Object.freeze(element);
                }
            }
            return element;
        }
        var didWarnAboutKeySpread = {};
        /**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */ function jsxDEV$1(type, config, maybeKey, isStaticChildren, source, self) {
            {
                if (!isValidElementType(type)) {
                    // This is an invalid element type.
                    //
                    // We warn in this case but don't throw. We expect the element creation to
                    // succeed and there will likely be errors in render.
                    var info = '';
                    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
                        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
                    }
                    var typeString;
                    if (type === null) {
                        typeString = 'null';
                    } else if (isArray(type)) {
                        typeString = 'array';
                    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
                        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
                        info = ' Did you accidentally export a JSX literal instead of a component?';
                    } else {
                        typeString = typeof type;
                    }
                    error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
                } else {
                    // This is a valid element type.
                    // Skip key warning if the type isn't valid since our key validation logic
                    // doesn't expect a non-string/function type and can throw confusing
                    // errors. We don't want exception behavior to differ between dev and
                    // prod. (Rendering will throw with a helpful message and as soon as the
                    // type is fixed, the key warnings will appear.)
                    var children = config.children;
                    if (children !== undefined) {
                        if (isStaticChildren) {
                            if (isArray(children)) {
                                for(var i = 0; i < children.length; i++){
                                    validateChildKeys(children[i], type);
                                }
                                if (Object.freeze) {
                                    Object.freeze(children);
                                }
                            } else {
                                error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
                            }
                        } else {
                            validateChildKeys(children, type);
                        }
                    }
                } // Warn about key spread regardless of whether the type is valid.
                if (hasOwnProperty.call(config, 'key')) {
                    var componentName = getComponentNameFromType(type);
                    var keys = Object.keys(config).filter(function(k) {
                        return k !== 'key';
                    });
                    var beforeExample = keys.length > 0 ? '{key: someKey, ' + keys.join(': ..., ') + ': ...}' : '{key: someKey}';
                    if (!didWarnAboutKeySpread[componentName + beforeExample]) {
                        var afterExample = keys.length > 0 ? '{' + keys.join(': ..., ') + ': ...}' : '{}';
                        error('A props object containing a "key" prop is being spread into JSX:\n' + '  let props = %s;\n' + '  <%s {...props} />\n' + 'React keys must be passed directly to JSX without using spread:\n' + '  let props = %s;\n' + '  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);
                        didWarnAboutKeySpread[componentName + beforeExample] = true;
                    }
                }
                var propName; // Reserved names are extracted
                var props = {};
                var key = null;
                var ref = null; // Currently, key can be spread in as a prop. This causes a potential
                // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
                // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
                // but as an intermediary step, we will use jsxDEV for everything except
                // <div {...props} key="Hi" />, because we aren't currently able to tell if
                // key is explicitly declared to be undefined or not.
                if (maybeKey !== undefined) {
                    {
                        checkKeyStringCoercion(maybeKey);
                    }
                    key = '' + maybeKey;
                }
                if (hasValidKey(config)) {
                    {
                        checkKeyStringCoercion(config.key);
                    }
                    key = '' + config.key;
                }
                if (hasValidRef(config)) {
                    {
                        ref = config.ref;
                    }
                    warnIfStringRefCannotBeAutoConverted(config, self);
                } // Remaining properties are added to a new props object
                for(propName in config){
                    if (hasOwnProperty.call(config, propName) && // Skip over reserved prop names
                    propName !== 'key' && propName !== 'ref') {
                        props[propName] = config[propName];
                    }
                } // Resolve default props
                if (type && type.defaultProps) {
                    var defaultProps = type.defaultProps;
                    for(propName in defaultProps){
                        if (props[propName] === undefined) {
                            props[propName] = defaultProps[propName];
                        }
                    }
                }
                if (key || ref) {
                    var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
                    if (key) {
                        defineKeyPropWarningGetter(props, displayName);
                    }
                    if (ref) {
                        defineRefPropWarningGetter(props, displayName);
                    }
                }
                var element = ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
                if (type === REACT_FRAGMENT_TYPE) {
                    validateFragmentProps(element);
                }
                return element;
            }
        }
        function getDeclarationErrorAddendum() {
            {
                if (ReactCurrentOwner.current) {
                    var name = getComponentNameFromType(ReactCurrentOwner.current.type);
                    if (name) {
                        return '\n\nCheck the render method of `' + name + '`.';
                    }
                }
                return '';
            }
        }
        /**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */ function validateChildKeys(node, parentType) {
            {
                if (typeof node !== 'object' || !node) {
                    return;
                }
                if (node.$$typeof === REACT_CLIENT_REFERENCE) ;
                else if (isArray(node)) {
                    for(var i = 0; i < node.length; i++){
                        var child = node[i];
                        if (isValidElement(child)) {
                            validateExplicitKey(child, parentType);
                        }
                    }
                } else if (isValidElement(node)) {
                    // This element was passed in a valid location.
                    if (node._store) {
                        node._store.validated = true;
                    }
                } else {
                    var iteratorFn = getIteratorFn(node);
                    if (typeof iteratorFn === 'function') {
                        // Entry iterators used to provide implicit keys,
                        // but now we print a separate warning for them later.
                        if (iteratorFn !== node.entries) {
                            var iterator = iteratorFn.call(node);
                            var step;
                            while(!(step = iterator.next()).done){
                                if (isValidElement(step.value)) {
                                    validateExplicitKey(step.value, parentType);
                                }
                            }
                        }
                    }
                }
            }
        }
        /**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */ function isValidElement(object) {
            return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        var ownerHasKeyUseWarning = {};
        /**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */ function validateExplicitKey(element, parentType) {
            {
                if (!element._store || element._store.validated || element.key != null) {
                    return;
                }
                element._store.validated = true;
                var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
                if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
                    return;
                }
                ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
                // property, it may be the creator of the child that's responsible for
                // assigning it a key.
                var childOwner = '';
                if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
                    // Give the component that originally created this child.
                    childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
                }
                setCurrentlyValidatingElement(element);
                error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
                setCurrentlyValidatingElement(null);
            }
        }
        function setCurrentlyValidatingElement(element) {
            {
                if (element) {
                    var owner = element._owner;
                    var stack = describeUnknownElementTypeFrameInDEV(element.type, owner ? owner.type : null);
                    ReactDebugCurrentFrame.setExtraStackFrame(stack);
                } else {
                    ReactDebugCurrentFrame.setExtraStackFrame(null);
                }
            }
        }
        function getCurrentComponentErrorInfo(parentType) {
            {
                var info = getDeclarationErrorAddendum();
                if (!info) {
                    var parentName = getComponentNameFromType(parentType);
                    if (parentName) {
                        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
                    }
                }
                return info;
            }
        }
        /**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */ function validateFragmentProps(fragment) {
            // TODO: Move this to render phase instead of at element creation.
            {
                var keys = Object.keys(fragment.props);
                for(var i = 0; i < keys.length; i++){
                    var key = keys[i];
                    if (key !== 'children' && key !== 'key') {
                        setCurrentlyValidatingElement(fragment);
                        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
                        setCurrentlyValidatingElement(null);
                        break;
                    }
                }
                if (fragment.ref !== null) {
                    setCurrentlyValidatingElement(fragment);
                    error('Invalid attribute `ref` supplied to `React.Fragment`.');
                    setCurrentlyValidatingElement(null);
                }
            }
        }
        var jsxDEV = jsxDEV$1;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.jsxDEV = jsxDEV;
    })();
}

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.2.3_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.3_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_require__("[project]/node_modules/.pnpm/next@14.2.3_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}

}.call(this) }),
"[project]/node_modules/.pnpm/react-type-animation@3.2.0_prop-types@15.8.1_react-dom@18.3.1_react@18.3.1/node_modules/react-type-animation/dist/esm/index.es.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "TypeAnimation": ()=>m
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.3_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function i(e, t, r, n) {
    return new (r || (r = Promise))(function(o, a) {
        function i(e) {
            try {
                c(n.next(e));
            } catch (e) {
                a(e);
            }
        }
        function u(e) {
            try {
                c(n.throw(e));
            } catch (e) {
                a(e);
            }
        }
        function c(e) {
            var t;
            e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                e(t);
            })).then(i, u);
        }
        c((n = n.apply(e, t || [])).next());
    });
}
function u(e, t) {
    var r, n, o, a, i = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1];
        },
        trys: [],
        ops: []
    };
    return a = {
        next: u(0),
        throw: u(1),
        return: u(2)
    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this;
    }), a;
    function u(a) {
        return function(u) {
            return function(a) {
                if (r) throw new TypeError("Generator is already executing.");
                for(; i;)try {
                    if (r = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
                    switch(n = 0, o && (a = [
                        2 & a[0],
                        o.value
                    ]), a[0]){
                        case 0:
                        case 1:
                            o = a;
                            break;
                        case 4:
                            return i.label++, {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            i.label++, n = a[1], a = [
                                0
                            ];
                            continue;
                        case 7:
                            a = i.ops.pop(), i.trys.pop();
                            continue;
                        default:
                            if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                i = 0;
                                continue;
                            }
                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                i.label = a[1];
                                break;
                            }
                            if (6 === a[0] && i.label < o[1]) {
                                i.label = o[1], o = a;
                                break;
                            }
                            if (o && i.label < o[2]) {
                                i.label = o[2], i.ops.push(a);
                                break;
                            }
                            o[2] && i.ops.pop(), i.trys.pop();
                            continue;
                    }
                    a = t.call(e, i);
                } catch (e) {
                    a = [
                        6,
                        e
                    ], n = 0;
                } finally{
                    r = o = 0;
                }
                if (5 & a[0]) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                };
            }([
                a,
                u
            ]);
        };
    }
}
function c(e) {
    var t = "function" == typeof Symbol && Symbol.iterator, r = t && e[t], n = 0;
    if (r) return r.call(e);
    if (e && "number" == typeof e.length) return {
        next: function() {
            return e && n >= e.length && (e = void 0), {
                value: e && e[n++],
                done: !e
            };
        }
    };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function l(e, t) {
    var r = "function" == typeof Symbol && e[Symbol.iterator];
    if (!r) return e;
    var n, o, a = r.call(e), i = [];
    try {
        for(; (void 0 === t || t-- > 0) && !(n = a.next()).done;)i.push(n.value);
    } catch (e) {
        o = {
            error: e
        };
    } finally{
        try {
            n && !n.done && (r = a.return) && r.call(a);
        } finally{
            if (o) throw o.error;
        }
    }
    return i;
}
function s(e, t, r) {
    if (r || 2 === arguments.length) for(var n, o = 0, a = t.length; o < a; o++)!n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
    return e.concat(n || Array.prototype.slice.call(t));
}
function f(e, t, r, n, o) {
    for(var a = [], f = 5; f < arguments.length; f++)a[f - 5] = arguments[f];
    return i(this, void 0, void 0, function() {
        var i, f, h, y, v, b;
        return u(this, function(u) {
            switch(u.label){
                case 0:
                    u.trys.push([
                        0,
                        12,
                        13,
                        14
                    ]), i = c(a), f = i.next(), u.label = 1;
                case 1:
                    if (f.done) return [
                        3,
                        11
                    ];
                    switch(h = f.value, typeof h){
                        case "string":
                            return [
                                3,
                                2
                            ];
                        case "number":
                            return [
                                3,
                                4
                            ];
                        case "function":
                            return [
                                3,
                                6
                            ];
                    }
                    return [
                        3,
                        8
                    ];
                case 2:
                    return [
                        4,
                        d(e, t, h, r, n, o)
                    ];
                case 3:
                    return u.sent(), [
                        3,
                        10
                    ];
                case 4:
                    return [
                        4,
                        p(h)
                    ];
                case 5:
                    return u.sent(), [
                        3,
                        10
                    ];
                case 6:
                    return [
                        4,
                        h.apply(void 0, s([
                            e,
                            t,
                            r,
                            n,
                            o
                        ], l(a), !1))
                    ];
                case 7:
                    return u.sent(), [
                        3,
                        10
                    ];
                case 8:
                    return [
                        4,
                        h
                    ];
                case 9:
                    u.sent(), u.label = 10;
                case 10:
                    return f = i.next(), [
                        3,
                        1
                    ];
                case 11:
                    return [
                        3,
                        14
                    ];
                case 12:
                    return y = u.sent(), v = {
                        error: y
                    }, [
                        3,
                        14
                    ];
                case 13:
                    try {
                        f && !f.done && (b = i.return) && b.call(i);
                    } finally{
                        if (v) throw v.error;
                    }
                    return [
                        7
                    ];
                case 14:
                    return [
                        2
                    ];
            }
        });
    });
}
function d(e, t, r, n, o, a) {
    return i(this, void 0, void 0, function() {
        var i, c;
        return u(this, function(u) {
            switch(u.label){
                case 0:
                    return i = e.textContent || "", c = function(e, t) {
                        var r = l(t).slice(0);
                        return s(s([], l(e), !1), [
                            NaN
                        ], !1).findIndex(function(e, t) {
                            return r[t] !== e;
                        });
                    }(i, r), [
                        4,
                        h(e, s(s([], l(v(i, t, c)), !1), l(y(r, t, c)), !1), n, o, a)
                    ];
                case 1:
                    return u.sent(), [
                        2
                    ];
            }
        });
    });
}
function p(e) {
    return i(this, void 0, void 0, function() {
        return u(this, function(t) {
            switch(t.label){
                case 0:
                    return [
                        4,
                        new Promise(function(t) {
                            return setTimeout(t, e);
                        })
                    ];
                case 1:
                    return t.sent(), [
                        2
                    ];
            }
        });
    });
}
function h(e, t, r, n, o) {
    return i(this, void 0, void 0, function() {
        var a, i, s, f, d, h, y, v, b, m, w, g, x;
        return u(this, function(S) {
            switch(S.label){
                case 0:
                    if (a = t, o) {
                        for(i = 0, s = 1; s < t.length; s++)if (f = l([
                            t[s - 1],
                            t[s]
                        ], 2), d = f[0], (h = f[1]).length > d.length || "" === h) {
                            i = s;
                            break;
                        }
                        a = t.slice(i, t.length);
                    }
                    S.label = 1;
                case 1:
                    S.trys.push([
                        1,
                        6,
                        7,
                        8
                    ]), y = c(function(e) {
                        var t, r, n, o, a, i, l;
                        return u(this, function(s) {
                            switch(s.label){
                                case 0:
                                    t = function(e) {
                                        return u(this, function(t) {
                                            switch(t.label){
                                                case 0:
                                                    return [
                                                        4,
                                                        {
                                                            op: function(t) {
                                                                return requestAnimationFrame(function() {
                                                                    return t.textContent = e;
                                                                });
                                                            },
                                                            opCode: function(t) {
                                                                var r = t.textContent || "";
                                                                return "" === e || r.length > e.length ? "DELETE" : "WRITING";
                                                            }
                                                        }
                                                    ];
                                                case 1:
                                                    return t.sent(), [
                                                        2
                                                    ];
                                            }
                                        });
                                    }, s.label = 1;
                                case 1:
                                    s.trys.push([
                                        1,
                                        6,
                                        7,
                                        8
                                    ]), r = c(e), n = r.next(), s.label = 2;
                                case 2:
                                    return n.done ? [
                                        3,
                                        5
                                    ] : (o = n.value, [
                                        5,
                                        t(o)
                                    ]);
                                case 3:
                                    s.sent(), s.label = 4;
                                case 4:
                                    return n = r.next(), [
                                        3,
                                        2
                                    ];
                                case 5:
                                    return [
                                        3,
                                        8
                                    ];
                                case 6:
                                    return a = s.sent(), i = {
                                        error: a
                                    }, [
                                        3,
                                        8
                                    ];
                                case 7:
                                    try {
                                        n && !n.done && (l = r.return) && l.call(r);
                                    } finally{
                                        if (i) throw i.error;
                                    }
                                    return [
                                        7
                                    ];
                                case 8:
                                    return [
                                        2
                                    ];
                            }
                        });
                    }(a)), v = y.next(), S.label = 2;
                case 2:
                    return v.done ? [
                        3,
                        5
                    ] : (b = v.value, m = "WRITING" === b.opCode(e) ? r + r * (Math.random() - .5) : n + n * (Math.random() - .5), b.op(e), [
                        4,
                        p(m)
                    ]);
                case 3:
                    S.sent(), S.label = 4;
                case 4:
                    return v = y.next(), [
                        3,
                        2
                    ];
                case 5:
                    return [
                        3,
                        8
                    ];
                case 6:
                    return w = S.sent(), g = {
                        error: w
                    }, [
                        3,
                        8
                    ];
                case 7:
                    try {
                        v && !v.done && (x = y.return) && x.call(y);
                    } finally{
                        if (g) throw g.error;
                    }
                    return [
                        7
                    ];
                case 8:
                    return [
                        2
                    ];
            }
        });
    });
}
function y(e, t, r) {
    var n, o;
    return void 0 === r && (r = 0), u(this, function(a) {
        switch(a.label){
            case 0:
                n = t(e), o = n.length, a.label = 1;
            case 1:
                return r < o ? [
                    4,
                    n.slice(0, ++r).join("")
                ] : [
                    3,
                    3
                ];
            case 2:
                return a.sent(), [
                    3,
                    1
                ];
            case 3:
                return [
                    2
                ];
        }
    });
}
function v(e, t, r) {
    var n, o;
    return void 0 === r && (r = 0), u(this, function(a) {
        switch(a.label){
            case 0:
                n = t(e), o = n.length, a.label = 1;
            case 1:
                return o > r ? [
                    4,
                    n.slice(0, --o).join("")
                ] : [
                    3,
                    3
                ];
            case 2:
                return a.sent(), [
                    3,
                    1
                ];
            case 3:
                return [
                    2
                ];
        }
    });
}
var b = "index-module_type__E-SaG";
!function(e, t) {
    void 0 === t && (t = {});
    var r = t.insertAt;
    if (e && "undefined" != typeof document) {
        var n = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
        o.type = "text/css", "top" === r && n.firstChild ? n.insertBefore(o, n.firstChild) : n.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e));
    }
}(".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n");
var m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(o, a) {
    var i = o.sequence, u = o.repeat, c = o.className, d = o.speed, p = void 0 === d ? 40 : d, h = o.deletionSpeed, y = o.omitDeletionAnimation, v = void 0 !== y && y, m = o.preRenderFirstString, w = void 0 !== m && m, g = o.wrapper, x = void 0 === g ? "span" : g, S = o.splitter, E = void 0 === S ? function(e) {
        return s([], l(e), !1);
    } : S, _ = o.cursor, k = void 0 === _ || _, O = o.style, T = function(e, t) {
        var r = {};
        for(var n in e)Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for(n = Object.getOwnPropertySymbols(e); o < n.length; o++)t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
        }
        return r;
    }(o, [
        "sequence",
        "repeat",
        "className",
        "speed",
        "deletionSpeed",
        "omitDeletionAnimation",
        "preRenderFirstString",
        "wrapper",
        "splitter",
        "cursor",
        "style"
    ]), A = T["aria-label"], C = T["aria-hidden"], N = T.role;
    h || (h = p);
    var P = new Array(2).fill(40);
    [
        p,
        h
    ].forEach(function(e, t) {
        switch(typeof e){
            case "number":
                P[t] = Math.abs(e - 100);
                break;
            case "object":
                var r = e.type, n = e.value;
                if ("number" != typeof n) break;
                if ("keyStrokeDelayInMs" === r) P[t] = n;
        }
    });
    var j, I, G, D, M, R, q = P[0], F = P[1], B = function(e, r) {
        void 0 === r && (r = null);
        var o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(r);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function() {
            e && ("function" == typeof e ? e(o.current) : e.current = o.current);
        }, [
            e
        ]), o;
    }(a), Q = b;
    j = c ? "".concat(k ? Q + " " : "").concat(c) : k ? Q : "", I = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(function() {
        var e, t = i;
        u === 1 / 0 ? e = f : "number" == typeof u && (t = Array(1 + u).fill(i).flat());
        var r = e ? s(s([], l(t), !1), [
            e
        ], !1) : s([], l(t), !1);
        return f.apply(void 0, s([
            B.current,
            E,
            q,
            F,
            v
        ], l(r), !1)), function() {
            B.current;
        };
    }), G = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(), D = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(!1), M = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(!1), R = l((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), 2)[1], D.current && (M.current = !0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        return D.current || (G.current = I.current(), D.current = !0), R(function(e) {
            return e + 1;
        }), function() {
            M.current && G.current && G.current();
        };
    }, []);
    var W = x, L = w ? i.find(function(e) {
        return "string" == typeof e;
    }) || "" : null;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(W, {
        "aria-hidden": C,
        "aria-label": A,
        role: N,
        style: O,
        className: j,
        children: A ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
            "aria-hidden": "true",
            ref: B,
            children: L
        }) : L,
        ref: A ? void 0 : B
    });
}), function(e, t) {
    return !0;
});
;

})()),
"[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.5_react-dom@18.3.1_react@18.3.1/node_modules/@phosphor-icons/react/dist/lib/SSRBase.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>E
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.3_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
var R = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (e, r, t)=>r in e ? R(e, r, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : e[r] = t, m = (e, r)=>{
    for(var t in r || (r = {}))n.call(r, t) && i(e, t, r[t]);
    if (l) for (var t of l(r))c.call(r, t) && i(e, t, r[t]);
    return e;
};
var w = (e, r)=>{
    var t = {};
    for(var s in e)n.call(e, s) && r.indexOf(s) < 0 && (t[s] = e[s]);
    if (e != null && l) for (var s of l(e))r.indexOf(s) < 0 && c.call(e, s) && (t[s] = e[s]);
    return t;
};
;
const d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((e, r)=>{
    const a = e, { alt: t, color: s = "currentColor", size: o = "1em", weight: f = "regular", mirrored: h = !1, children: S, weights: p } = a, u = w(a, [
        "alt",
        "color",
        "size",
        "weight",
        "mirrored",
        "children",
        "weights"
    ]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", m({
        ref: r,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        fill: s,
        viewBox: "0 0 256 256",
        transform: h ? "scale(-1, 1)" : void 0
    }, u), !!t && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("title", null, t), S, p.get(f));
});
d.displayName = "SSRBase";
const E = d;
;

})()),
"[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.5_react-dom@18.3.1_react@18.3.1/node_modules/@phosphor-icons/react/dist/defs/ForkKnife.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>t
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.3_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const t = /* @__PURE__ */ new Map([
    [
        "bold",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M68,88V40a12,12,0,0,1,24,0V88a12,12,0,0,1-24,0ZM220,40V224a12,12,0,0,1-24,0V180H152a12,12,0,0,1-12-12,273.23,273.23,0,0,1,7.33-57.82C157.42,68.42,176.76,40.33,203.27,29A12,12,0,0,1,220,40ZM196,62.92C182.6,77,175,98,170.77,115.38A254.41,254.41,0,0,0,164.55,156H196ZM128,39A12,12,0,0,0,104,41l4,47.46a28,28,0,0,1-56,0L56,41A12,12,0,1,0,32,39L28,87c0,.34,0,.67,0,1a52.1,52.1,0,0,0,40,50.59V224a12,12,0,0,0,24,0V138.59A52.1,52.1,0,0,0,132,88c0-.33,0-.66,0-1Z"
        }))
    ],
    [
        "duotone",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M208,40V168H152S152,64,208,40Z",
            opacity: "0.2"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M72,88V40a8,8,0,0,1,16,0V88a8,8,0,0,1-16,0ZM216,40V224a8,8,0,0,1-16,0V176H152a8,8,0,0,1-8-8,268.75,268.75,0,0,1,7.22-56.88c9.78-40.49,28.32-67.63,53.63-78.47A8,8,0,0,1,216,40ZM200,53.9c-32.17,24.57-38.47,84.42-39.7,106.1H200ZM119.89,38.69a8,8,0,1,0-15.78,2.63L112,88.63a32,32,0,0,1-64,0l7.88-47.31a8,8,0,1,0-15.78-2.63l-8,48A8.17,8.17,0,0,0,32,88a48.07,48.07,0,0,0,40,47.32V224a8,8,0,0,0,16,0V135.32A48.07,48.07,0,0,0,128,88a8.17,8.17,0,0,0-.11-1.31Z"
        }))
    ],
    [
        "fill",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M216,40V224a8,8,0,0,1-16,0V176H152a8,8,0,0,1-8-8,268.75,268.75,0,0,1,7.22-56.88c9.78-40.49,28.32-67.63,53.63-78.47A8,8,0,0,1,216,40Zm-96.11-1.31a8,8,0,1,0-15.78,2.63L111.89,88H88V40a8,8,0,0,0-16,0V88H48.11l7.78-46.68a8,8,0,1,0-15.78-2.63l-8,48A8.17,8.17,0,0,0,32,88a48.07,48.07,0,0,0,40,47.32V224a8,8,0,0,0,16,0V135.32A48.07,48.07,0,0,0,128,88a8.17,8.17,0,0,0-.11-1.31Z"
        }))
    ],
    [
        "light",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M74,88V40a6,6,0,0,1,12,0V88a6,6,0,0,1-12,0ZM214,40V224a6,6,0,0,1-12,0V174H152a6,6,0,0,1-6-6c0-4.41.68-108.25,59.64-133.51A6,6,0,0,1,214,40ZM202,50c-36.79,24.29-42.82,91.48-43.81,112H202ZM117.92,39a6,6,0,1,0-11.84,2L114,88.48a34,34,0,0,1-68,0L53.92,41a6,6,0,0,0-11.84-2l-8,48A6.61,6.61,0,0,0,34,88a46.06,46.06,0,0,0,40,45.6V224a6,6,0,0,0,12,0V133.6A46.06,46.06,0,0,0,126,88a6.61,6.61,0,0,0-.08-1Z"
        }))
    ],
    [
        "regular",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M72,88V40a8,8,0,0,1,16,0V88a8,8,0,0,1-16,0ZM216,40V224a8,8,0,0,1-16,0V176H152a8,8,0,0,1-8-8,268.75,268.75,0,0,1,7.22-56.88c9.78-40.49,28.32-67.63,53.63-78.47A8,8,0,0,1,216,40ZM200,53.9c-32.17,24.57-38.47,84.42-39.7,106.1H200ZM119.89,38.69a8,8,0,1,0-15.78,2.63L112,88.63a32,32,0,0,1-64,0l7.88-47.31a8,8,0,1,0-15.78-2.63l-8,48A8.17,8.17,0,0,0,32,88a48.07,48.07,0,0,0,40,47.32V224a8,8,0,0,0,16,0V135.32A48.07,48.07,0,0,0,128,88a8.17,8.17,0,0,0-.11-1.31Z"
        }))
    ],
    [
        "thin",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M76,88V40a4,4,0,0,1,8,0V88a4,4,0,0,1-8,0ZM212,40V224a4,4,0,0,1-8,0V172H152a4,4,0,0,1-4-4,264.27,264.27,0,0,1,7.11-55.94c9.47-39.22,27.21-65.41,51.31-75.74A4,4,0,0,1,212,40Zm-8,6.46C162.25,70.33,156.81,145.75,156.1,164H204Zm-88-7.12a4,4,0,0,0-7.9,1.32l8,47.66a36,36,0,0,1-72,0l8-47.66a4,4,0,0,0-7.9-1.32l-8,48A4.89,4.89,0,0,0,36,88a44.06,44.06,0,0,0,40,43.81V224a4,4,0,0,0,8,0V131.81A44.06,44.06,0,0,0,124,88a4.89,4.89,0,0,0,0-.66Z"
        }))
    ]
]);
;

})()),
"[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.5_react-dom@18.3.1_react@18.3.1/node_modules/@phosphor-icons/react/dist/ssr/ForkKnife.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ForkKnife": ()=>w
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.3_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$lib$2f$SSRBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.5_react-dom@18.3.1_react@18.3.1/node_modules/@phosphor-icons/react/dist/lib/SSRBase.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$defs$2f$ForkKnife$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.5_react-dom@18.3.1_react@18.3.1/node_modules/@phosphor-icons/react/dist/defs/ForkKnife.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (r, e, o)=>e in r ? i(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: o
    }) : r[e] = o, a = (r, e)=>{
    for(var o in e || (e = {}))n.call(e, o) && m(r, o, e[o]);
    if (t) for (var o of t(e))c.call(e, o) && m(r, o, e[o]);
    return r;
}, f = (r, e)=>p(r, s(e));
;
;
;
const w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((r, e)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$lib$2f$SSRBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], f(a({
        ref: e
    }, r), {
        weights: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$defs$2f$ForkKnife$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    })));
w.displayName = "ForkKnife";
;

})()),
"[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "clsx": ()=>clsx,
    "default": ()=>__TURBOPACK__default__export__
});
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;

})()),
"[project]/node_modules/.pnpm/tailwind-merge@2.3.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "createTailwindMerge": ()=>createTailwindMerge,
    "extendTailwindMerge": ()=>extendTailwindMerge,
    "fromTheme": ()=>fromTheme,
    "getDefaultConfig": ()=>getDefaultConfig,
    "mergeConfigs": ()=>mergeConfigs,
    "twJoin": ()=>twJoin,
    "twMerge": ()=>twMerge,
    "validators": ()=>validators
});
const CLASS_PART_SEPARATOR = '-';
function createClassUtils(config) {
    const classMap = createClassMap(config);
    const { conflictingClassGroups, conflictingClassGroupModifiers } = config;
    function getClassGroupId(className) {
        const classParts = className.split(CLASS_PART_SEPARATOR);
        // Classes like `-inset-1` produce an empty string as first classPart. We assume that classes for negative values are used correctly and remove it from classParts.
        if (classParts[0] === '' && classParts.length !== 1) {
            classParts.shift();
        }
        return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
    }
    function getConflictingClassGroupIds(classGroupId, hasPostfixModifier) {
        const conflicts = conflictingClassGroups[classGroupId] || [];
        if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
            return [
                ...conflicts,
                ...conflictingClassGroupModifiers[classGroupId]
            ];
        }
        return conflicts;
    }
    return {
        getClassGroupId,
        getConflictingClassGroupIds
    };
}
function getGroupRecursive(classParts, classPartObject) {
    if (classParts.length === 0) {
        return classPartObject.classGroupId;
    }
    const currentClassPart = classParts[0];
    const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
    const classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : undefined;
    if (classGroupFromNextClassPart) {
        return classGroupFromNextClassPart;
    }
    if (classPartObject.validators.length === 0) {
        return undefined;
    }
    const classRest = classParts.join(CLASS_PART_SEPARATOR);
    return classPartObject.validators.find(({ validator })=>validator(classRest))?.classGroupId;
}
const arbitraryPropertyRegex = /^\[(.+)\]$/;
function getGroupIdForArbitraryProperty(className) {
    if (arbitraryPropertyRegex.test(className)) {
        const arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
        const property = arbitraryPropertyClassName?.substring(0, arbitraryPropertyClassName.indexOf(':'));
        if (property) {
            // I use two dots here because one dot is used as prefix for class groups in plugins
            return 'arbitrary..' + property;
        }
    }
}
/**
 * Exported for testing only
 */ function createClassMap(config) {
    const { theme, prefix } = config;
    const classMap = {
        nextPart: new Map(),
        validators: []
    };
    const prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
    prefixedClassGroupEntries.forEach(([classGroupId, classGroup])=>{
        processClassesRecursively(classGroup, classMap, classGroupId, theme);
    });
    return classMap;
}
function processClassesRecursively(classGroup, classPartObject, classGroupId, theme) {
    classGroup.forEach((classDefinition)=>{
        if (typeof classDefinition === 'string') {
            const classPartObjectToEdit = classDefinition === '' ? classPartObject : getPart(classPartObject, classDefinition);
            classPartObjectToEdit.classGroupId = classGroupId;
            return;
        }
        if (typeof classDefinition === 'function') {
            if (isThemeGetter(classDefinition)) {
                processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
                return;
            }
            classPartObject.validators.push({
                validator: classDefinition,
                classGroupId
            });
            return;
        }
        Object.entries(classDefinition).forEach(([key, classGroup])=>{
            processClassesRecursively(classGroup, getPart(classPartObject, key), classGroupId, theme);
        });
    });
}
function getPart(classPartObject, path) {
    let currentClassPartObject = classPartObject;
    path.split(CLASS_PART_SEPARATOR).forEach((pathPart)=>{
        if (!currentClassPartObject.nextPart.has(pathPart)) {
            currentClassPartObject.nextPart.set(pathPart, {
                nextPart: new Map(),
                validators: []
            });
        }
        currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
    });
    return currentClassPartObject;
}
function isThemeGetter(func) {
    return func.isThemeGetter;
}
function getPrefixedClassGroupEntries(classGroupEntries, prefix) {
    if (!prefix) {
        return classGroupEntries;
    }
    return classGroupEntries.map(([classGroupId, classGroup])=>{
        const prefixedClassGroup = classGroup.map((classDefinition)=>{
            if (typeof classDefinition === 'string') {
                return prefix + classDefinition;
            }
            if (typeof classDefinition === 'object') {
                return Object.fromEntries(Object.entries(classDefinition).map(([key, value])=>[
                        prefix + key,
                        value
                    ]));
            }
            return classDefinition;
        });
        return [
            classGroupId,
            prefixedClassGroup
        ];
    });
}
// LRU cache inspired from hashlru (https://github.com/dominictarr/hashlru/blob/v1.0.4/index.js) but object replaced with Map to improve performance
function createLruCache(maxCacheSize) {
    if (maxCacheSize < 1) {
        return {
            get: ()=>undefined,
            set: ()=>{}
        };
    }
    let cacheSize = 0;
    let cache = new Map();
    let previousCache = new Map();
    function update(key, value) {
        cache.set(key, value);
        cacheSize++;
        if (cacheSize > maxCacheSize) {
            cacheSize = 0;
            previousCache = cache;
            cache = new Map();
        }
    }
    return {
        get (key) {
            let value = cache.get(key);
            if (value !== undefined) {
                return value;
            }
            if ((value = previousCache.get(key)) !== undefined) {
                update(key, value);
                return value;
            }
        },
        set (key, value) {
            if (cache.has(key)) {
                cache.set(key, value);
            } else {
                update(key, value);
            }
        }
    };
}
const IMPORTANT_MODIFIER = '!';
function createSplitModifiers(config) {
    const separator = config.separator;
    const isSeparatorSingleCharacter = separator.length === 1;
    const firstSeparatorCharacter = separator[0];
    const separatorLength = separator.length;
    // splitModifiers inspired by https://github.com/tailwindlabs/tailwindcss/blob/v3.2.2/src/util/splitAtTopLevelOnly.js
    return function splitModifiers(className) {
        const modifiers = [];
        let bracketDepth = 0;
        let modifierStart = 0;
        let postfixModifierPosition;
        for(let index = 0; index < className.length; index++){
            let currentCharacter = className[index];
            if (bracketDepth === 0) {
                if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index, index + separatorLength) === separator)) {
                    modifiers.push(className.slice(modifierStart, index));
                    modifierStart = index + separatorLength;
                    continue;
                }
                if (currentCharacter === '/') {
                    postfixModifierPosition = index;
                    continue;
                }
            }
            if (currentCharacter === '[') {
                bracketDepth++;
            } else if (currentCharacter === ']') {
                bracketDepth--;
            }
        }
        const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
        const hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
        const baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
        const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : undefined;
        return {
            modifiers,
            hasImportantModifier,
            baseClassName,
            maybePostfixModifierPosition
        };
    };
}
/**
 * Sorts modifiers according to following schema:
 * - Predefined modifiers are sorted alphabetically
 * - When an arbitrary variant appears, it must be preserved which modifiers are before and after it
 */ function sortModifiers(modifiers) {
    if (modifiers.length <= 1) {
        return modifiers;
    }
    const sortedModifiers = [];
    let unsortedModifiers = [];
    modifiers.forEach((modifier)=>{
        const isArbitraryVariant = modifier[0] === '[';
        if (isArbitraryVariant) {
            sortedModifiers.push(...unsortedModifiers.sort(), modifier);
            unsortedModifiers = [];
        } else {
            unsortedModifiers.push(modifier);
        }
    });
    sortedModifiers.push(...unsortedModifiers.sort());
    return sortedModifiers;
}
function createConfigUtils(config) {
    return {
        cache: createLruCache(config.cacheSize),
        splitModifiers: createSplitModifiers(config),
        ...createClassUtils(config)
    };
}
const SPLIT_CLASSES_REGEX = /\s+/;
function mergeClassList(classList, configUtils) {
    const { splitModifiers, getClassGroupId, getConflictingClassGroupIds } = configUtils;
    /**
   * Set of classGroupIds in following format:
   * `{importantModifier}{variantModifiers}{classGroupId}`
   * @example 'float'
   * @example 'hover:focus:bg-color'
   * @example 'md:!pr'
   */ const classGroupsInConflict = new Set();
    return classList.trim().split(SPLIT_CLASSES_REGEX).map((originalClassName)=>{
        const { modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition } = splitModifiers(originalClassName);
        let classGroupId = getClassGroupId(maybePostfixModifierPosition ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
        let hasPostfixModifier = Boolean(maybePostfixModifierPosition);
        if (!classGroupId) {
            if (!maybePostfixModifierPosition) {
                return {
                    isTailwindClass: false,
                    originalClassName
                };
            }
            classGroupId = getClassGroupId(baseClassName);
            if (!classGroupId) {
                return {
                    isTailwindClass: false,
                    originalClassName
                };
            }
            hasPostfixModifier = false;
        }
        const variantModifier = sortModifiers(modifiers).join(':');
        const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
        return {
            isTailwindClass: true,
            modifierId,
            classGroupId,
            originalClassName,
            hasPostfixModifier
        };
    }).reverse()// Last class in conflict wins, so we need to filter conflicting classes in reverse order.
    .filter((parsed)=>{
        if (!parsed.isTailwindClass) {
            return true;
        }
        const { modifierId, classGroupId, hasPostfixModifier } = parsed;
        const classId = modifierId + classGroupId;
        if (classGroupsInConflict.has(classId)) {
            return false;
        }
        classGroupsInConflict.add(classId);
        getConflictingClassGroupIds(classGroupId, hasPostfixModifier).forEach((group)=>classGroupsInConflict.add(modifierId + group));
        return true;
    }).reverse().map((parsed)=>parsed.originalClassName).join(' ');
}
/**
 * The code in this file is copied from https://github.com/lukeed/clsx and modified to suit the needs of tailwind-merge better.
 *
 * Specifically:
 * - Runtime code from https://github.com/lukeed/clsx/blob/v1.2.1/src/index.js
 * - TypeScript types from https://github.com/lukeed/clsx/blob/v1.2.1/clsx.d.ts
 *
 * Original code has MIT license: Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
 */ function twJoin() {
    let index = 0;
    let argument;
    let resolvedValue;
    let string = '';
    while(index < arguments.length){
        if (argument = arguments[index++]) {
            if (resolvedValue = toValue(argument)) {
                string && (string += ' ');
                string += resolvedValue;
            }
        }
    }
    return string;
}
function toValue(mix) {
    if (typeof mix === 'string') {
        return mix;
    }
    let resolvedValue;
    let string = '';
    for(let k = 0; k < mix.length; k++){
        if (mix[k]) {
            if (resolvedValue = toValue(mix[k])) {
                string && (string += ' ');
                string += resolvedValue;
            }
        }
    }
    return string;
}
function createTailwindMerge(createConfigFirst, ...createConfigRest) {
    let configUtils;
    let cacheGet;
    let cacheSet;
    let functionToCall = initTailwindMerge;
    function initTailwindMerge(classList) {
        const config = createConfigRest.reduce((previousConfig, createConfigCurrent)=>createConfigCurrent(previousConfig), createConfigFirst());
        configUtils = createConfigUtils(config);
        cacheGet = configUtils.cache.get;
        cacheSet = configUtils.cache.set;
        functionToCall = tailwindMerge;
        return tailwindMerge(classList);
    }
    function tailwindMerge(classList) {
        const cachedResult = cacheGet(classList);
        if (cachedResult) {
            return cachedResult;
        }
        const result = mergeClassList(classList, configUtils);
        cacheSet(classList, result);
        return result;
    }
    return function callTailwindMerge() {
        return functionToCall(twJoin.apply(null, arguments));
    };
}
function fromTheme(key) {
    const themeGetter = (theme)=>theme[key] || [];
    themeGetter.isThemeGetter = true;
    return themeGetter;
}
const arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
const fractionRegex = /^\d+\/\d+$/;
const stringLengths = /*#__PURE__*/ new Set([
    'px',
    'full',
    'screen'
]);
const tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
const lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
const colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
// Shadow always begins with x and y offset separated by underscore optionally prepended by inset
const shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
const imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function isLength(value) {
    return isNumber(value) || stringLengths.has(value) || fractionRegex.test(value);
}
function isArbitraryLength(value) {
    return getIsArbitraryValue(value, 'length', isLengthOnly);
}
function isNumber(value) {
    return Boolean(value) && !Number.isNaN(Number(value));
}
function isArbitraryNumber(value) {
    return getIsArbitraryValue(value, 'number', isNumber);
}
function isInteger(value) {
    return Boolean(value) && Number.isInteger(Number(value));
}
function isPercent(value) {
    return value.endsWith('%') && isNumber(value.slice(0, -1));
}
function isArbitraryValue(value) {
    return arbitraryValueRegex.test(value);
}
function isTshirtSize(value) {
    return tshirtUnitRegex.test(value);
}
const sizeLabels = /*#__PURE__*/ new Set([
    'length',
    'size',
    'percentage'
]);
function isArbitrarySize(value) {
    return getIsArbitraryValue(value, sizeLabels, isNever);
}
function isArbitraryPosition(value) {
    return getIsArbitraryValue(value, 'position', isNever);
}
const imageLabels = /*#__PURE__*/ new Set([
    'image',
    'url'
]);
function isArbitraryImage(value) {
    return getIsArbitraryValue(value, imageLabels, isImage);
}
function isArbitraryShadow(value) {
    return getIsArbitraryValue(value, '', isShadow);
}
function isAny() {
    return true;
}
function getIsArbitraryValue(value, label, testValue) {
    const result = arbitraryValueRegex.exec(value);
    if (result) {
        if (result[1]) {
            return typeof label === 'string' ? result[1] === label : label.has(result[1]);
        }
        return testValue(result[2]);
    }
    return false;
}
function isLengthOnly(value) {
    // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
    // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
    // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
    return lengthUnitRegex.test(value) && !colorFunctionRegex.test(value);
}
function isNever() {
    return false;
}
function isShadow(value) {
    return shadowRegex.test(value);
}
function isImage(value) {
    return imageRegex.test(value);
}
const validators = /*#__PURE__*/ Object.defineProperty({
    __proto__: null,
    isAny,
    isArbitraryImage,
    isArbitraryLength,
    isArbitraryNumber,
    isArbitraryPosition,
    isArbitraryShadow,
    isArbitrarySize,
    isArbitraryValue,
    isInteger,
    isLength,
    isNumber,
    isPercent,
    isTshirtSize
}, Symbol.toStringTag, {
    value: 'Module'
});
function getDefaultConfig() {
    const colors = fromTheme('colors');
    const spacing = fromTheme('spacing');
    const blur = fromTheme('blur');
    const brightness = fromTheme('brightness');
    const borderColor = fromTheme('borderColor');
    const borderRadius = fromTheme('borderRadius');
    const borderSpacing = fromTheme('borderSpacing');
    const borderWidth = fromTheme('borderWidth');
    const contrast = fromTheme('contrast');
    const grayscale = fromTheme('grayscale');
    const hueRotate = fromTheme('hueRotate');
    const invert = fromTheme('invert');
    const gap = fromTheme('gap');
    const gradientColorStops = fromTheme('gradientColorStops');
    const gradientColorStopPositions = fromTheme('gradientColorStopPositions');
    const inset = fromTheme('inset');
    const margin = fromTheme('margin');
    const opacity = fromTheme('opacity');
    const padding = fromTheme('padding');
    const saturate = fromTheme('saturate');
    const scale = fromTheme('scale');
    const sepia = fromTheme('sepia');
    const skew = fromTheme('skew');
    const space = fromTheme('space');
    const translate = fromTheme('translate');
    const getOverscroll = ()=>[
            'auto',
            'contain',
            'none'
        ];
    const getOverflow = ()=>[
            'auto',
            'hidden',
            'clip',
            'visible',
            'scroll'
        ];
    const getSpacingWithAutoAndArbitrary = ()=>[
            'auto',
            isArbitraryValue,
            spacing
        ];
    const getSpacingWithArbitrary = ()=>[
            isArbitraryValue,
            spacing
        ];
    const getLengthWithEmptyAndArbitrary = ()=>[
            '',
            isLength,
            isArbitraryLength
        ];
    const getNumberWithAutoAndArbitrary = ()=>[
            'auto',
            isNumber,
            isArbitraryValue
        ];
    const getPositions = ()=>[
            'bottom',
            'center',
            'left',
            'left-bottom',
            'left-top',
            'right',
            'right-bottom',
            'right-top',
            'top'
        ];
    const getLineStyles = ()=>[
            'solid',
            'dashed',
            'dotted',
            'double',
            'none'
        ];
    const getBlendModes = ()=>[
            'normal',
            'multiply',
            'screen',
            'overlay',
            'darken',
            'lighten',
            'color-dodge',
            'color-burn',
            'hard-light',
            'soft-light',
            'difference',
            'exclusion',
            'hue',
            'saturation',
            'color',
            'luminosity'
        ];
    const getAlign = ()=>[
            'start',
            'end',
            'center',
            'between',
            'around',
            'evenly',
            'stretch'
        ];
    const getZeroAndEmpty = ()=>[
            '',
            '0',
            isArbitraryValue
        ];
    const getBreaks = ()=>[
            'auto',
            'avoid',
            'all',
            'avoid-page',
            'page',
            'left',
            'right',
            'column'
        ];
    const getNumber = ()=>[
            isNumber,
            isArbitraryNumber
        ];
    const getNumberAndArbitrary = ()=>[
            isNumber,
            isArbitraryValue
        ];
    return {
        cacheSize: 500,
        separator: ':',
        theme: {
            colors: [
                isAny
            ],
            spacing: [
                isLength,
                isArbitraryLength
            ],
            blur: [
                'none',
                '',
                isTshirtSize,
                isArbitraryValue
            ],
            brightness: getNumber(),
            borderColor: [
                colors
            ],
            borderRadius: [
                'none',
                '',
                'full',
                isTshirtSize,
                isArbitraryValue
            ],
            borderSpacing: getSpacingWithArbitrary(),
            borderWidth: getLengthWithEmptyAndArbitrary(),
            contrast: getNumber(),
            grayscale: getZeroAndEmpty(),
            hueRotate: getNumberAndArbitrary(),
            invert: getZeroAndEmpty(),
            gap: getSpacingWithArbitrary(),
            gradientColorStops: [
                colors
            ],
            gradientColorStopPositions: [
                isPercent,
                isArbitraryLength
            ],
            inset: getSpacingWithAutoAndArbitrary(),
            margin: getSpacingWithAutoAndArbitrary(),
            opacity: getNumber(),
            padding: getSpacingWithArbitrary(),
            saturate: getNumber(),
            scale: getNumber(),
            sepia: getZeroAndEmpty(),
            skew: getNumberAndArbitrary(),
            space: getSpacingWithArbitrary(),
            translate: getSpacingWithArbitrary()
        },
        classGroups: {
            // Layout
            /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */ aspect: [
                {
                    aspect: [
                        'auto',
                        'square',
                        'video',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */ container: [
                'container'
            ],
            /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */ columns: [
                {
                    columns: [
                        isTshirtSize
                    ]
                }
            ],
            /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */ 'break-after': [
                {
                    'break-after': getBreaks()
                }
            ],
            /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */ 'break-before': [
                {
                    'break-before': getBreaks()
                }
            ],
            /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */ 'break-inside': [
                {
                    'break-inside': [
                        'auto',
                        'avoid',
                        'avoid-page',
                        'avoid-column'
                    ]
                }
            ],
            /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */ 'box-decoration': [
                {
                    'box-decoration': [
                        'slice',
                        'clone'
                    ]
                }
            ],
            /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */ box: [
                {
                    box: [
                        'border',
                        'content'
                    ]
                }
            ],
            /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */ display: [
                'block',
                'inline-block',
                'inline',
                'flex',
                'inline-flex',
                'table',
                'inline-table',
                'table-caption',
                'table-cell',
                'table-column',
                'table-column-group',
                'table-footer-group',
                'table-header-group',
                'table-row-group',
                'table-row',
                'flow-root',
                'grid',
                'inline-grid',
                'contents',
                'list-item',
                'hidden'
            ],
            /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */ float: [
                {
                    float: [
                        'right',
                        'left',
                        'none',
                        'start',
                        'end'
                    ]
                }
            ],
            /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */ clear: [
                {
                    clear: [
                        'left',
                        'right',
                        'both',
                        'none',
                        'start',
                        'end'
                    ]
                }
            ],
            /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */ isolation: [
                'isolate',
                'isolation-auto'
            ],
            /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */ 'object-fit': [
                {
                    object: [
                        'contain',
                        'cover',
                        'fill',
                        'none',
                        'scale-down'
                    ]
                }
            ],
            /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */ 'object-position': [
                {
                    object: [
                        ...getPositions(),
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */ overflow: [
                {
                    overflow: getOverflow()
                }
            ],
            /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */ 'overflow-x': [
                {
                    'overflow-x': getOverflow()
                }
            ],
            /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */ 'overflow-y': [
                {
                    'overflow-y': getOverflow()
                }
            ],
            /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ overscroll: [
                {
                    overscroll: getOverscroll()
                }
            ],
            /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ 'overscroll-x': [
                {
                    'overscroll-x': getOverscroll()
                }
            ],
            /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ 'overscroll-y': [
                {
                    'overscroll-y': getOverscroll()
                }
            ],
            /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */ position: [
                'static',
                'fixed',
                'absolute',
                'relative',
                'sticky'
            ],
            /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ inset: [
                {
                    inset: [
                        inset
                    ]
                }
            ],
            /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ 'inset-x': [
                {
                    'inset-x': [
                        inset
                    ]
                }
            ],
            /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ 'inset-y': [
                {
                    'inset-y': [
                        inset
                    ]
                }
            ],
            /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ start: [
                {
                    start: [
                        inset
                    ]
                }
            ],
            /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ end: [
                {
                    end: [
                        inset
                    ]
                }
            ],
            /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ top: [
                {
                    top: [
                        inset
                    ]
                }
            ],
            /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ right: [
                {
                    right: [
                        inset
                    ]
                }
            ],
            /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ bottom: [
                {
                    bottom: [
                        inset
                    ]
                }
            ],
            /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ left: [
                {
                    left: [
                        inset
                    ]
                }
            ],
            /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */ visibility: [
                'visible',
                'invisible',
                'collapse'
            ],
            /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */ z: [
                {
                    z: [
                        'auto',
                        isInteger,
                        isArbitraryValue
                    ]
                }
            ],
            // Flexbox and Grid
            /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */ basis: [
                {
                    basis: getSpacingWithAutoAndArbitrary()
                }
            ],
            /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */ 'flex-direction': [
                {
                    flex: [
                        'row',
                        'row-reverse',
                        'col',
                        'col-reverse'
                    ]
                }
            ],
            /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */ 'flex-wrap': [
                {
                    flex: [
                        'wrap',
                        'wrap-reverse',
                        'nowrap'
                    ]
                }
            ],
            /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */ flex: [
                {
                    flex: [
                        '1',
                        'auto',
                        'initial',
                        'none',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */ grow: [
                {
                    grow: getZeroAndEmpty()
                }
            ],
            /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */ shrink: [
                {
                    shrink: getZeroAndEmpty()
                }
            ],
            /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */ order: [
                {
                    order: [
                        'first',
                        'last',
                        'none',
                        isInteger,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */ 'grid-cols': [
                {
                    'grid-cols': [
                        isAny
                    ]
                }
            ],
            /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */ 'col-start-end': [
                {
                    col: [
                        'auto',
                        {
                            span: [
                                'full',
                                isInteger,
                                isArbitraryValue
                            ]
                        },
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */ 'col-start': [
                {
                    'col-start': getNumberWithAutoAndArbitrary()
                }
            ],
            /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */ 'col-end': [
                {
                    'col-end': getNumberWithAutoAndArbitrary()
                }
            ],
            /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */ 'grid-rows': [
                {
                    'grid-rows': [
                        isAny
                    ]
                }
            ],
            /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */ 'row-start-end': [
                {
                    row: [
                        'auto',
                        {
                            span: [
                                isInteger,
                                isArbitraryValue
                            ]
                        },
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */ 'row-start': [
                {
                    'row-start': getNumberWithAutoAndArbitrary()
                }
            ],
            /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */ 'row-end': [
                {
                    'row-end': getNumberWithAutoAndArbitrary()
                }
            ],
            /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */ 'grid-flow': [
                {
                    'grid-flow': [
                        'row',
                        'col',
                        'dense',
                        'row-dense',
                        'col-dense'
                    ]
                }
            ],
            /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */ 'auto-cols': [
                {
                    'auto-cols': [
                        'auto',
                        'min',
                        'max',
                        'fr',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */ 'auto-rows': [
                {
                    'auto-rows': [
                        'auto',
                        'min',
                        'max',
                        'fr',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */ gap: [
                {
                    gap: [
                        gap
                    ]
                }
            ],
            /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */ 'gap-x': [
                {
                    'gap-x': [
                        gap
                    ]
                }
            ],
            /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */ 'gap-y': [
                {
                    'gap-y': [
                        gap
                    ]
                }
            ],
            /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */ 'justify-content': [
                {
                    justify: [
                        'normal',
                        ...getAlign()
                    ]
                }
            ],
            /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */ 'justify-items': [
                {
                    'justify-items': [
                        'start',
                        'end',
                        'center',
                        'stretch'
                    ]
                }
            ],
            /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */ 'justify-self': [
                {
                    'justify-self': [
                        'auto',
                        'start',
                        'end',
                        'center',
                        'stretch'
                    ]
                }
            ],
            /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */ 'align-content': [
                {
                    content: [
                        'normal',
                        ...getAlign(),
                        'baseline'
                    ]
                }
            ],
            /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */ 'align-items': [
                {
                    items: [
                        'start',
                        'end',
                        'center',
                        'baseline',
                        'stretch'
                    ]
                }
            ],
            /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */ 'align-self': [
                {
                    self: [
                        'auto',
                        'start',
                        'end',
                        'center',
                        'stretch',
                        'baseline'
                    ]
                }
            ],
            /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */ 'place-content': [
                {
                    'place-content': [
                        ...getAlign(),
                        'baseline'
                    ]
                }
            ],
            /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */ 'place-items': [
                {
                    'place-items': [
                        'start',
                        'end',
                        'center',
                        'baseline',
                        'stretch'
                    ]
                }
            ],
            /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */ 'place-self': [
                {
                    'place-self': [
                        'auto',
                        'start',
                        'end',
                        'center',
                        'stretch'
                    ]
                }
            ],
            // Spacing
            /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */ p: [
                {
                    p: [
                        padding
                    ]
                }
            ],
            /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */ px: [
                {
                    px: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */ py: [
                {
                    py: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */ ps: [
                {
                    ps: [
                        padding
                    ]
                }
            ],
            /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */ pe: [
                {
                    pe: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */ pt: [
                {
                    pt: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */ pr: [
                {
                    pr: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */ pb: [
                {
                    pb: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */ pl: [
                {
                    pl: [
                        padding
                    ]
                }
            ],
            /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */ m: [
                {
                    m: [
                        margin
                    ]
                }
            ],
            /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */ mx: [
                {
                    mx: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */ my: [
                {
                    my: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */ ms: [
                {
                    ms: [
                        margin
                    ]
                }
            ],
            /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */ me: [
                {
                    me: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */ mt: [
                {
                    mt: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */ mr: [
                {
                    mr: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */ mb: [
                {
                    mb: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */ ml: [
                {
                    ml: [
                        margin
                    ]
                }
            ],
            /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */ 'space-x': [
                {
                    'space-x': [
                        space
                    ]
                }
            ],
            /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */ 'space-x-reverse': [
                'space-x-reverse'
            ],
            /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */ 'space-y': [
                {
                    'space-y': [
                        space
                    ]
                }
            ],
            /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */ 'space-y-reverse': [
                'space-y-reverse'
            ],
            // Sizing
            /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */ w: [
                {
                    w: [
                        'auto',
                        'min',
                        'max',
                        'fit',
                        'svw',
                        'lvw',
                        'dvw',
                        isArbitraryValue,
                        spacing
                    ]
                }
            ],
            /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */ 'min-w': [
                {
                    'min-w': [
                        isArbitraryValue,
                        spacing,
                        'min',
                        'max',
                        'fit'
                    ]
                }
            ],
            /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */ 'max-w': [
                {
                    'max-w': [
                        isArbitraryValue,
                        spacing,
                        'none',
                        'full',
                        'min',
                        'max',
                        'fit',
                        'prose',
                        {
                            screen: [
                                isTshirtSize
                            ]
                        },
                        isTshirtSize
                    ]
                }
            ],
            /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */ h: [
                {
                    h: [
                        isArbitraryValue,
                        spacing,
                        'auto',
                        'min',
                        'max',
                        'fit',
                        'svh',
                        'lvh',
                        'dvh'
                    ]
                }
            ],
            /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */ 'min-h': [
                {
                    'min-h': [
                        isArbitraryValue,
                        spacing,
                        'min',
                        'max',
                        'fit',
                        'svh',
                        'lvh',
                        'dvh'
                    ]
                }
            ],
            /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */ 'max-h': [
                {
                    'max-h': [
                        isArbitraryValue,
                        spacing,
                        'min',
                        'max',
                        'fit',
                        'svh',
                        'lvh',
                        'dvh'
                    ]
                }
            ],
            /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */ size: [
                {
                    size: [
                        isArbitraryValue,
                        spacing,
                        'auto',
                        'min',
                        'max',
                        'fit'
                    ]
                }
            ],
            // Typography
            /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */ 'font-size': [
                {
                    text: [
                        'base',
                        isTshirtSize,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */ 'font-smoothing': [
                'antialiased',
                'subpixel-antialiased'
            ],
            /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */ 'font-style': [
                'italic',
                'not-italic'
            ],
            /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */ 'font-weight': [
                {
                    font: [
                        'thin',
                        'extralight',
                        'light',
                        'normal',
                        'medium',
                        'semibold',
                        'bold',
                        'extrabold',
                        'black',
                        isArbitraryNumber
                    ]
                }
            ],
            /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */ 'font-family': [
                {
                    font: [
                        isAny
                    ]
                }
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-normal': [
                'normal-nums'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-ordinal': [
                'ordinal'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-slashed-zero': [
                'slashed-zero'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-figure': [
                'lining-nums',
                'oldstyle-nums'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-spacing': [
                'proportional-nums',
                'tabular-nums'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-fraction': [
                'diagonal-fractions',
                'stacked-fractons'
            ],
            /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */ tracking: [
                {
                    tracking: [
                        'tighter',
                        'tight',
                        'normal',
                        'wide',
                        'wider',
                        'widest',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */ 'line-clamp': [
                {
                    'line-clamp': [
                        'none',
                        isNumber,
                        isArbitraryNumber
                    ]
                }
            ],
            /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */ leading: [
                {
                    leading: [
                        'none',
                        'tight',
                        'snug',
                        'normal',
                        'relaxed',
                        'loose',
                        isLength,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */ 'list-image': [
                {
                    'list-image': [
                        'none',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */ 'list-style-type': [
                {
                    list: [
                        'none',
                        'disc',
                        'decimal',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */ 'list-style-position': [
                {
                    list: [
                        'inside',
                        'outside'
                    ]
                }
            ],
            /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */ 'placeholder-color': [
                {
                    placeholder: [
                        colors
                    ]
                }
            ],
            /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */ 'placeholder-opacity': [
                {
                    'placeholder-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */ 'text-alignment': [
                {
                    text: [
                        'left',
                        'center',
                        'right',
                        'justify',
                        'start',
                        'end'
                    ]
                }
            ],
            /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */ 'text-color': [
                {
                    text: [
                        colors
                    ]
                }
            ],
            /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */ 'text-opacity': [
                {
                    'text-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */ 'text-decoration': [
                'underline',
                'overline',
                'line-through',
                'no-underline'
            ],
            /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */ 'text-decoration-style': [
                {
                    decoration: [
                        ...getLineStyles(),
                        'wavy'
                    ]
                }
            ],
            /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */ 'text-decoration-thickness': [
                {
                    decoration: [
                        'auto',
                        'from-font',
                        isLength,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */ 'underline-offset': [
                {
                    'underline-offset': [
                        'auto',
                        isLength,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */ 'text-decoration-color': [
                {
                    decoration: [
                        colors
                    ]
                }
            ],
            /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */ 'text-transform': [
                'uppercase',
                'lowercase',
                'capitalize',
                'normal-case'
            ],
            /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */ 'text-overflow': [
                'truncate',
                'text-ellipsis',
                'text-clip'
            ],
            /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */ 'text-wrap': [
                {
                    text: [
                        'wrap',
                        'nowrap',
                        'balance',
                        'pretty'
                    ]
                }
            ],
            /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */ indent: [
                {
                    indent: getSpacingWithArbitrary()
                }
            ],
            /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */ 'vertical-align': [
                {
                    align: [
                        'baseline',
                        'top',
                        'middle',
                        'bottom',
                        'text-top',
                        'text-bottom',
                        'sub',
                        'super',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */ whitespace: [
                {
                    whitespace: [
                        'normal',
                        'nowrap',
                        'pre',
                        'pre-line',
                        'pre-wrap',
                        'break-spaces'
                    ]
                }
            ],
            /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */ break: [
                {
                    break: [
                        'normal',
                        'words',
                        'all',
                        'keep'
                    ]
                }
            ],
            /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */ hyphens: [
                {
                    hyphens: [
                        'none',
                        'manual',
                        'auto'
                    ]
                }
            ],
            /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */ content: [
                {
                    content: [
                        'none',
                        isArbitraryValue
                    ]
                }
            ],
            // Backgrounds
            /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */ 'bg-attachment': [
                {
                    bg: [
                        'fixed',
                        'local',
                        'scroll'
                    ]
                }
            ],
            /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */ 'bg-clip': [
                {
                    'bg-clip': [
                        'border',
                        'padding',
                        'content',
                        'text'
                    ]
                }
            ],
            /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */ 'bg-opacity': [
                {
                    'bg-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */ 'bg-origin': [
                {
                    'bg-origin': [
                        'border',
                        'padding',
                        'content'
                    ]
                }
            ],
            /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */ 'bg-position': [
                {
                    bg: [
                        ...getPositions(),
                        isArbitraryPosition
                    ]
                }
            ],
            /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */ 'bg-repeat': [
                {
                    bg: [
                        'no-repeat',
                        {
                            repeat: [
                                '',
                                'x',
                                'y',
                                'round',
                                'space'
                            ]
                        }
                    ]
                }
            ],
            /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */ 'bg-size': [
                {
                    bg: [
                        'auto',
                        'cover',
                        'contain',
                        isArbitrarySize
                    ]
                }
            ],
            /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */ 'bg-image': [
                {
                    bg: [
                        'none',
                        {
                            'gradient-to': [
                                't',
                                'tr',
                                'r',
                                'br',
                                'b',
                                'bl',
                                'l',
                                'tl'
                            ]
                        },
                        isArbitraryImage
                    ]
                }
            ],
            /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */ 'bg-color': [
                {
                    bg: [
                        colors
                    ]
                }
            ],
            /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-from-pos': [
                {
                    from: [
                        gradientColorStopPositions
                    ]
                }
            ],
            /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-via-pos': [
                {
                    via: [
                        gradientColorStopPositions
                    ]
                }
            ],
            /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-to-pos': [
                {
                    to: [
                        gradientColorStopPositions
                    ]
                }
            ],
            /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-from': [
                {
                    from: [
                        gradientColorStops
                    ]
                }
            ],
            /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-via': [
                {
                    via: [
                        gradientColorStops
                    ]
                }
            ],
            /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-to': [
                {
                    to: [
                        gradientColorStops
                    ]
                }
            ],
            // Borders
            /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */ rounded: [
                {
                    rounded: [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-s': [
                {
                    'rounded-s': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-e': [
                {
                    'rounded-e': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-t': [
                {
                    'rounded-t': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-r': [
                {
                    'rounded-r': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-b': [
                {
                    'rounded-b': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-l': [
                {
                    'rounded-l': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-ss': [
                {
                    'rounded-ss': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-se': [
                {
                    'rounded-se': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-ee': [
                {
                    'rounded-ee': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-es': [
                {
                    'rounded-es': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-tl': [
                {
                    'rounded-tl': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-tr': [
                {
                    'rounded-tr': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-br': [
                {
                    'rounded-br': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-bl': [
                {
                    'rounded-bl': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w': [
                {
                    border: [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-x': [
                {
                    'border-x': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-y': [
                {
                    'border-y': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-s': [
                {
                    'border-s': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-e': [
                {
                    'border-e': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-t': [
                {
                    'border-t': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-r': [
                {
                    'border-r': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-b': [
                {
                    'border-b': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-l': [
                {
                    'border-l': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */ 'border-opacity': [
                {
                    'border-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */ 'border-style': [
                {
                    border: [
                        ...getLineStyles(),
                        'hidden'
                    ]
                }
            ],
            /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */ 'divide-x': [
                {
                    'divide-x': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */ 'divide-x-reverse': [
                'divide-x-reverse'
            ],
            /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */ 'divide-y': [
                {
                    'divide-y': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */ 'divide-y-reverse': [
                'divide-y-reverse'
            ],
            /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */ 'divide-opacity': [
                {
                    'divide-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */ 'divide-style': [
                {
                    divide: getLineStyles()
                }
            ],
            /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color': [
                {
                    border: [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-x': [
                {
                    'border-x': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-y': [
                {
                    'border-y': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-t': [
                {
                    'border-t': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-r': [
                {
                    'border-r': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-b': [
                {
                    'border-b': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-l': [
                {
                    'border-l': [
                        borderColor
                    ]
                }
            ],
            /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */ 'divide-color': [
                {
                    divide: [
                        borderColor
                    ]
                }
            ],
            /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */ 'outline-style': [
                {
                    outline: [
                        '',
                        ...getLineStyles()
                    ]
                }
            ],
            /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */ 'outline-offset': [
                {
                    'outline-offset': [
                        isLength,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */ 'outline-w': [
                {
                    outline: [
                        isLength,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */ 'outline-color': [
                {
                    outline: [
                        colors
                    ]
                }
            ],
            /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */ 'ring-w': [
                {
                    ring: getLengthWithEmptyAndArbitrary()
                }
            ],
            /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */ 'ring-w-inset': [
                'ring-inset'
            ],
            /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */ 'ring-color': [
                {
                    ring: [
                        colors
                    ]
                }
            ],
            /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */ 'ring-opacity': [
                {
                    'ring-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */ 'ring-offset-w': [
                {
                    'ring-offset': [
                        isLength,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */ 'ring-offset-color': [
                {
                    'ring-offset': [
                        colors
                    ]
                }
            ],
            // Effects
            /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */ shadow: [
                {
                    shadow: [
                        '',
                        'inner',
                        'none',
                        isTshirtSize,
                        isArbitraryShadow
                    ]
                }
            ],
            /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */ 'shadow-color': [
                {
                    shadow: [
                        isAny
                    ]
                }
            ],
            /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */ opacity: [
                {
                    opacity: [
                        opacity
                    ]
                }
            ],
            /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */ 'mix-blend': [
                {
                    'mix-blend': [
                        ...getBlendModes(),
                        'plus-lighter',
                        'plus-darker'
                    ]
                }
            ],
            /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */ 'bg-blend': [
                {
                    'bg-blend': getBlendModes()
                }
            ],
            // Filters
            /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */ filter: [
                {
                    filter: [
                        '',
                        'none'
                    ]
                }
            ],
            /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */ blur: [
                {
                    blur: [
                        blur
                    ]
                }
            ],
            /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */ brightness: [
                {
                    brightness: [
                        brightness
                    ]
                }
            ],
            /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */ contrast: [
                {
                    contrast: [
                        contrast
                    ]
                }
            ],
            /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */ 'drop-shadow': [
                {
                    'drop-shadow': [
                        '',
                        'none',
                        isTshirtSize,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */ grayscale: [
                {
                    grayscale: [
                        grayscale
                    ]
                }
            ],
            /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */ 'hue-rotate': [
                {
                    'hue-rotate': [
                        hueRotate
                    ]
                }
            ],
            /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */ invert: [
                {
                    invert: [
                        invert
                    ]
                }
            ],
            /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */ saturate: [
                {
                    saturate: [
                        saturate
                    ]
                }
            ],
            /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */ sepia: [
                {
                    sepia: [
                        sepia
                    ]
                }
            ],
            /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */ 'backdrop-filter': [
                {
                    'backdrop-filter': [
                        '',
                        'none'
                    ]
                }
            ],
            /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */ 'backdrop-blur': [
                {
                    'backdrop-blur': [
                        blur
                    ]
                }
            ],
            /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */ 'backdrop-brightness': [
                {
                    'backdrop-brightness': [
                        brightness
                    ]
                }
            ],
            /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */ 'backdrop-contrast': [
                {
                    'backdrop-contrast': [
                        contrast
                    ]
                }
            ],
            /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */ 'backdrop-grayscale': [
                {
                    'backdrop-grayscale': [
                        grayscale
                    ]
                }
            ],
            /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */ 'backdrop-hue-rotate': [
                {
                    'backdrop-hue-rotate': [
                        hueRotate
                    ]
                }
            ],
            /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */ 'backdrop-invert': [
                {
                    'backdrop-invert': [
                        invert
                    ]
                }
            ],
            /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */ 'backdrop-opacity': [
                {
                    'backdrop-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */ 'backdrop-saturate': [
                {
                    'backdrop-saturate': [
                        saturate
                    ]
                }
            ],
            /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */ 'backdrop-sepia': [
                {
                    'backdrop-sepia': [
                        sepia
                    ]
                }
            ],
            // Tables
            /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */ 'border-collapse': [
                {
                    border: [
                        'collapse',
                        'separate'
                    ]
                }
            ],
            /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */ 'border-spacing': [
                {
                    'border-spacing': [
                        borderSpacing
                    ]
                }
            ],
            /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */ 'border-spacing-x': [
                {
                    'border-spacing-x': [
                        borderSpacing
                    ]
                }
            ],
            /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */ 'border-spacing-y': [
                {
                    'border-spacing-y': [
                        borderSpacing
                    ]
                }
            ],
            /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */ 'table-layout': [
                {
                    table: [
                        'auto',
                        'fixed'
                    ]
                }
            ],
            /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */ caption: [
                {
                    caption: [
                        'top',
                        'bottom'
                    ]
                }
            ],
            // Transitions and Animation
            /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */ transition: [
                {
                    transition: [
                        'none',
                        'all',
                        '',
                        'colors',
                        'opacity',
                        'shadow',
                        'transform',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */ duration: [
                {
                    duration: getNumberAndArbitrary()
                }
            ],
            /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */ ease: [
                {
                    ease: [
                        'linear',
                        'in',
                        'out',
                        'in-out',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */ delay: [
                {
                    delay: getNumberAndArbitrary()
                }
            ],
            /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */ animate: [
                {
                    animate: [
                        'none',
                        'spin',
                        'ping',
                        'pulse',
                        'bounce',
                        isArbitraryValue
                    ]
                }
            ],
            // Transforms
            /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */ transform: [
                {
                    transform: [
                        '',
                        'gpu',
                        'none'
                    ]
                }
            ],
            /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */ scale: [
                {
                    scale: [
                        scale
                    ]
                }
            ],
            /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */ 'scale-x': [
                {
                    'scale-x': [
                        scale
                    ]
                }
            ],
            /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */ 'scale-y': [
                {
                    'scale-y': [
                        scale
                    ]
                }
            ],
            /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */ rotate: [
                {
                    rotate: [
                        isInteger,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */ 'translate-x': [
                {
                    'translate-x': [
                        translate
                    ]
                }
            ],
            /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */ 'translate-y': [
                {
                    'translate-y': [
                        translate
                    ]
                }
            ],
            /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */ 'skew-x': [
                {
                    'skew-x': [
                        skew
                    ]
                }
            ],
            /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */ 'skew-y': [
                {
                    'skew-y': [
                        skew
                    ]
                }
            ],
            /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */ 'transform-origin': [
                {
                    origin: [
                        'center',
                        'top',
                        'top-right',
                        'right',
                        'bottom-right',
                        'bottom',
                        'bottom-left',
                        'left',
                        'top-left',
                        isArbitraryValue
                    ]
                }
            ],
            // Interactivity
            /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */ accent: [
                {
                    accent: [
                        'auto',
                        colors
                    ]
                }
            ],
            /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */ appearance: [
                {
                    appearance: [
                        'none',
                        'auto'
                    ]
                }
            ],
            /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */ cursor: [
                {
                    cursor: [
                        'auto',
                        'default',
                        'pointer',
                        'wait',
                        'text',
                        'move',
                        'help',
                        'not-allowed',
                        'none',
                        'context-menu',
                        'progress',
                        'cell',
                        'crosshair',
                        'vertical-text',
                        'alias',
                        'copy',
                        'no-drop',
                        'grab',
                        'grabbing',
                        'all-scroll',
                        'col-resize',
                        'row-resize',
                        'n-resize',
                        'e-resize',
                        's-resize',
                        'w-resize',
                        'ne-resize',
                        'nw-resize',
                        'se-resize',
                        'sw-resize',
                        'ew-resize',
                        'ns-resize',
                        'nesw-resize',
                        'nwse-resize',
                        'zoom-in',
                        'zoom-out',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */ 'caret-color': [
                {
                    caret: [
                        colors
                    ]
                }
            ],
            /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */ 'pointer-events': [
                {
                    'pointer-events': [
                        'none',
                        'auto'
                    ]
                }
            ],
            /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */ resize: [
                {
                    resize: [
                        'none',
                        'y',
                        'x',
                        ''
                    ]
                }
            ],
            /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */ 'scroll-behavior': [
                {
                    scroll: [
                        'auto',
                        'smooth'
                    ]
                }
            ],
            /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-m': [
                {
                    'scroll-m': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-mx': [
                {
                    'scroll-mx': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-my': [
                {
                    'scroll-my': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-ms': [
                {
                    'scroll-ms': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-me': [
                {
                    'scroll-me': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-mt': [
                {
                    'scroll-mt': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-mr': [
                {
                    'scroll-mr': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-mb': [
                {
                    'scroll-mb': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-ml': [
                {
                    'scroll-ml': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-p': [
                {
                    'scroll-p': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-px': [
                {
                    'scroll-px': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-py': [
                {
                    'scroll-py': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-ps': [
                {
                    'scroll-ps': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pe': [
                {
                    'scroll-pe': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pt': [
                {
                    'scroll-pt': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pr': [
                {
                    'scroll-pr': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pb': [
                {
                    'scroll-pb': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pl': [
                {
                    'scroll-pl': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */ 'snap-align': [
                {
                    snap: [
                        'start',
                        'end',
                        'center',
                        'align-none'
                    ]
                }
            ],
            /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */ 'snap-stop': [
                {
                    snap: [
                        'normal',
                        'always'
                    ]
                }
            ],
            /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */ 'snap-type': [
                {
                    snap: [
                        'none',
                        'x',
                        'y',
                        'both'
                    ]
                }
            ],
            /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */ 'snap-strictness': [
                {
                    snap: [
                        'mandatory',
                        'proximity'
                    ]
                }
            ],
            /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */ touch: [
                {
                    touch: [
                        'auto',
                        'none',
                        'manipulation'
                    ]
                }
            ],
            /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */ 'touch-x': [
                {
                    'touch-pan': [
                        'x',
                        'left',
                        'right'
                    ]
                }
            ],
            /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */ 'touch-y': [
                {
                    'touch-pan': [
                        'y',
                        'up',
                        'down'
                    ]
                }
            ],
            /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */ 'touch-pz': [
                'touch-pinch-zoom'
            ],
            /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */ select: [
                {
                    select: [
                        'none',
                        'text',
                        'all',
                        'auto'
                    ]
                }
            ],
            /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */ 'will-change': [
                {
                    'will-change': [
                        'auto',
                        'scroll',
                        'contents',
                        'transform',
                        isArbitraryValue
                    ]
                }
            ],
            // SVG
            /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */ fill: [
                {
                    fill: [
                        colors,
                        'none'
                    ]
                }
            ],
            /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */ 'stroke-w': [
                {
                    stroke: [
                        isLength,
                        isArbitraryLength,
                        isArbitraryNumber
                    ]
                }
            ],
            /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */ stroke: [
                {
                    stroke: [
                        colors,
                        'none'
                    ]
                }
            ],
            // Accessibility
            /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */ sr: [
                'sr-only',
                'not-sr-only'
            ],
            /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */ 'forced-color-adjust': [
                {
                    'forced-color-adjust': [
                        'auto',
                        'none'
                    ]
                }
            ]
        },
        conflictingClassGroups: {
            overflow: [
                'overflow-x',
                'overflow-y'
            ],
            overscroll: [
                'overscroll-x',
                'overscroll-y'
            ],
            inset: [
                'inset-x',
                'inset-y',
                'start',
                'end',
                'top',
                'right',
                'bottom',
                'left'
            ],
            'inset-x': [
                'right',
                'left'
            ],
            'inset-y': [
                'top',
                'bottom'
            ],
            flex: [
                'basis',
                'grow',
                'shrink'
            ],
            gap: [
                'gap-x',
                'gap-y'
            ],
            p: [
                'px',
                'py',
                'ps',
                'pe',
                'pt',
                'pr',
                'pb',
                'pl'
            ],
            px: [
                'pr',
                'pl'
            ],
            py: [
                'pt',
                'pb'
            ],
            m: [
                'mx',
                'my',
                'ms',
                'me',
                'mt',
                'mr',
                'mb',
                'ml'
            ],
            mx: [
                'mr',
                'ml'
            ],
            my: [
                'mt',
                'mb'
            ],
            size: [
                'w',
                'h'
            ],
            'font-size': [
                'leading'
            ],
            'fvn-normal': [
                'fvn-ordinal',
                'fvn-slashed-zero',
                'fvn-figure',
                'fvn-spacing',
                'fvn-fraction'
            ],
            'fvn-ordinal': [
                'fvn-normal'
            ],
            'fvn-slashed-zero': [
                'fvn-normal'
            ],
            'fvn-figure': [
                'fvn-normal'
            ],
            'fvn-spacing': [
                'fvn-normal'
            ],
            'fvn-fraction': [
                'fvn-normal'
            ],
            'line-clamp': [
                'display',
                'overflow'
            ],
            rounded: [
                'rounded-s',
                'rounded-e',
                'rounded-t',
                'rounded-r',
                'rounded-b',
                'rounded-l',
                'rounded-ss',
                'rounded-se',
                'rounded-ee',
                'rounded-es',
                'rounded-tl',
                'rounded-tr',
                'rounded-br',
                'rounded-bl'
            ],
            'rounded-s': [
                'rounded-ss',
                'rounded-es'
            ],
            'rounded-e': [
                'rounded-se',
                'rounded-ee'
            ],
            'rounded-t': [
                'rounded-tl',
                'rounded-tr'
            ],
            'rounded-r': [
                'rounded-tr',
                'rounded-br'
            ],
            'rounded-b': [
                'rounded-br',
                'rounded-bl'
            ],
            'rounded-l': [
                'rounded-tl',
                'rounded-bl'
            ],
            'border-spacing': [
                'border-spacing-x',
                'border-spacing-y'
            ],
            'border-w': [
                'border-w-s',
                'border-w-e',
                'border-w-t',
                'border-w-r',
                'border-w-b',
                'border-w-l'
            ],
            'border-w-x': [
                'border-w-r',
                'border-w-l'
            ],
            'border-w-y': [
                'border-w-t',
                'border-w-b'
            ],
            'border-color': [
                'border-color-t',
                'border-color-r',
                'border-color-b',
                'border-color-l'
            ],
            'border-color-x': [
                'border-color-r',
                'border-color-l'
            ],
            'border-color-y': [
                'border-color-t',
                'border-color-b'
            ],
            'scroll-m': [
                'scroll-mx',
                'scroll-my',
                'scroll-ms',
                'scroll-me',
                'scroll-mt',
                'scroll-mr',
                'scroll-mb',
                'scroll-ml'
            ],
            'scroll-mx': [
                'scroll-mr',
                'scroll-ml'
            ],
            'scroll-my': [
                'scroll-mt',
                'scroll-mb'
            ],
            'scroll-p': [
                'scroll-px',
                'scroll-py',
                'scroll-ps',
                'scroll-pe',
                'scroll-pt',
                'scroll-pr',
                'scroll-pb',
                'scroll-pl'
            ],
            'scroll-px': [
                'scroll-pr',
                'scroll-pl'
            ],
            'scroll-py': [
                'scroll-pt',
                'scroll-pb'
            ],
            touch: [
                'touch-x',
                'touch-y',
                'touch-pz'
            ],
            'touch-x': [
                'touch'
            ],
            'touch-y': [
                'touch'
            ],
            'touch-pz': [
                'touch'
            ]
        },
        conflictingClassGroupModifiers: {
            'font-size': [
                'leading'
            ]
        }
    };
}
/**
 * @param baseConfig Config where other config will be merged into. This object will be mutated.
 * @param configExtension Partial config to merge into the `baseConfig`.
 */ function mergeConfigs(baseConfig, { cacheSize, prefix, separator, extend = {}, override = {} }) {
    overrideProperty(baseConfig, 'cacheSize', cacheSize);
    overrideProperty(baseConfig, 'prefix', prefix);
    overrideProperty(baseConfig, 'separator', separator);
    for(const configKey in override){
        overrideConfigProperties(baseConfig[configKey], override[configKey]);
    }
    for(const key in extend){
        mergeConfigProperties(baseConfig[key], extend[key]);
    }
    return baseConfig;
}
function overrideProperty(baseObject, overrideKey, overrideValue) {
    if (overrideValue !== undefined) {
        baseObject[overrideKey] = overrideValue;
    }
}
function overrideConfigProperties(baseObject, overrideObject) {
    if (overrideObject) {
        for(const key in overrideObject){
            overrideProperty(baseObject, key, overrideObject[key]);
        }
    }
}
function mergeConfigProperties(baseObject, mergeObject) {
    if (mergeObject) {
        for(const key in mergeObject){
            const mergeValue = mergeObject[key];
            if (mergeValue !== undefined) {
                baseObject[key] = (baseObject[key] || []).concat(mergeValue);
            }
        }
    }
}
function extendTailwindMerge(configExtension, ...createConfig) {
    return typeof configExtension === 'function' ? createTailwindMerge(getDefaultConfig, configExtension, ...createConfig) : createTailwindMerge(()=>mergeConfigs(getDefaultConfig(), configExtension), ...createConfig);
}
const twMerge = /*#__PURE__*/ createTailwindMerge(getDefaultConfig);
;
 //# sourceMappingURL=bundle-mjs.mjs.map

})()),
}]);

//# sourceMappingURL=08b5e__pnpm_0e544b._.js.map