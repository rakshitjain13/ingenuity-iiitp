import { g as getDefaultExportFromCjs, c as createCommonjsModule, a as commonjsGlobal } from './common/_commonjsHelpers-6f5dde0d.js';
import { p as process } from './common/process-06825524.js';
import { r as react } from './common/index-a05ca7d8.js';
import { r as reactDom } from './common/index-a7b60132.js';
import './common/index-bca7ec87.js';
import { p as propTypes } from './common/index-9c2178a8.js';
import { _ as _inheritsLoose, a as _objectWithoutPropertiesLoose, b as _extends } from './common/inheritsLoose-5052625a.js';
import { _ as _assertThisInitialized } from './common/assertThisInitialized-8eae6022.js';

function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!hasClass(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}

function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}

var config = {
  disabled: false
};

var timeoutsShape = process.env.NODE_ENV !== 'production' ? propTypes.oneOfType([propTypes.number, propTypes.shape({
  enter: propTypes.number,
  exit: propTypes.number,
  appear: propTypes.number
}).isRequired]) : null;
var classNamesShape = process.env.NODE_ENV !== 'production' ? propTypes.oneOfType([propTypes.string, propTypes.shape({
  enter: propTypes.string,
  exit: propTypes.string,
  active: propTypes.string
}), propTypes.shape({
  enter: propTypes.string,
  enterDone: propTypes.string,
  enterActive: propTypes.string,
  exit: propTypes.string,
  exitDone: propTypes.string,
  exitActive: propTypes.string
})]) : null;

var TransitionGroupContext = react.createContext(null);

var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [reactDom.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : reactDom.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : reactDom.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      react.createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : react.cloneElement(react.Children.only(children), childProps))
    );
  };

  return Transition;
}(react.Component);

Transition.contextType = TransitionGroupContext;
Transition.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: propTypes.shape({
    current: typeof Element === 'undefined' ? propTypes.any : propTypes.instanceOf(Element)
  }),

  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: propTypes.oneOfType([propTypes.func.isRequired, propTypes.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: propTypes.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: propTypes.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: propTypes.bool,

  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: propTypes.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: propTypes.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: propTypes.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: propTypes.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: propTypes.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: propTypes.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: propTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: propTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: propTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: propTypes.func
} : {}; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;

var _addClass = function addClass$1(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return addClass(node, c);
  });
};

var removeClass$1 = function removeClass$1(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return removeClass(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
 * use it if you're using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**, so it's
 * important to add `transition` declaration only to them, otherwise transitions
 * might not behave as intended! This might not be obvious when the transitions
 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
 * the example above (minus `transition`), but it becomes apparent in more
 * complex transitions.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */


var CSSTransition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };

    _this.onEnter = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument[0],
          appearing = _this$resolveArgument[1];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };

    _this.onEntering = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument2[0],
          appearing = _this$resolveArgument2[1];

      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };

    _this.onEntered = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument3[0],
          appearing = _this$resolveArgument3[1];

      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };

    _this.onExit = function (maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument4[0];

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };

    _this.onExiting = function (maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument5[0];

      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };

    _this.onExited = function (maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument6[0];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };

    _this.resolveArguments = function (maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] // here `maybeNode` is actually `appearing`
      : [maybeNode, maybeAppearing];
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName: baseClassName,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];

    var _this$getClassNames = this.getClassNames('enter'),
        doneClassName = _this$getClassNames.doneClassName;

    if (type === 'appear' && phase === 'done' && doneClassName) {
      className += " " + doneClassName;
    } // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
    }

    if (className) {
      this.appliedClasses[type][phase] = className;

      _addClass(node, className);
    }
  };

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type],
        baseClassName = _this$appliedClasses$.base,
        activeClassName = _this$appliedClasses$.active,
        doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};

    if (baseClassName) {
      removeClass$1(node, baseClassName);
    }

    if (activeClassName) {
      removeClass$1(node, activeClassName);
    }

    if (doneClassName) {
      removeClass$1(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        _ = _this$props.classNames,
        props = _objectWithoutPropertiesLoose(_this$props, ["classNames"]);

    return /*#__PURE__*/react.createElement(Transition, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(react.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, Transition.propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: classNamesShape,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: propTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: propTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: propTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: propTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: propTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: propTypes.func
}) : {};

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && react.isValidElement(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) react.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return react.cloneElement(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!react.isValidElement(child)) return;
    var hasPrev = (key in prevChildMapping);
    var hasNext = (key in nextChildMapping);
    var prevChild = prevChildMapping[key];
    var isLeaving = react.isValidElement(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = react.cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = react.cloneElement(child, {
        in: false
      });
    } else if (hasNext && hasPrev && react.isValidElement(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = react.cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */

var TransitionGroup = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this)); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  } // node is `undefined` when user provided `nodeRef` prop
  ;

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = _extends({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return /*#__PURE__*/react.createElement(TransitionGroupContext.Provider, {
        value: contextValue
      }, children);
    }

    return /*#__PURE__*/react.createElement(TransitionGroupContext.Provider, {
      value: contextValue
    }, /*#__PURE__*/react.createElement(Component, props, children));
  };

  return TransitionGroup;
}(react.Component);

TransitionGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: propTypes.any,

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: propTypes.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: propTypes.bool,

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: propTypes.bool,

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: propTypes.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: propTypes.func
} : {};
TransitionGroup.defaultProps = defaultProps;

/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */

var ReplaceTransition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;
    var child = react.Children.toArray(children)[idx];
    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);

    if (this.props[handler]) {
      var maybeNode = child.props.nodeRef ? undefined : reactDom.findDOMNode(this);
      this.props[handler](maybeNode);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = _objectWithoutPropertiesLoose(_this$props, ["children", "in"]);

    var _React$Children$toArr = react.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return /*#__PURE__*/react.createElement(TransitionGroup, props, inProp ? react.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : react.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(react.Component);

ReplaceTransition.propTypes = process.env.NODE_ENV !== "production" ? {
  in: propTypes.bool.isRequired,
  children: function children(props, propName) {
    if (react.Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
    return null;
  }
} : {};

var _leaveRenders, _enterRenders;

function areChildrenDifferent(oldChildren, newChildren) {
  if (oldChildren === newChildren) return false;

  if (react.isValidElement(oldChildren) && react.isValidElement(newChildren) && oldChildren.key != null && oldChildren.key === newChildren.key) {
    return false;
  }

  return true;
}
/**
 * Enum of modes for SwitchTransition component
 * @enum { string }
 */


var modes = {
  out: 'out-in',
  in: 'in-out'
};

var callHook = function callHook(element, name, cb) {
  return function () {
    var _element$props;

    element.props[name] && (_element$props = element.props)[name].apply(_element$props, arguments);
    cb();
  };
};

var leaveRenders = (_leaveRenders = {}, _leaveRenders[modes.out] = function (_ref) {
  var current = _ref.current,
      changeState = _ref.changeState;
  return react.cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(ENTERING, null);
    })
  });
}, _leaveRenders[modes.in] = function (_ref2) {
  var current = _ref2.current,
      changeState = _ref2.changeState,
      children = _ref2.children;
  return [current, react.cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(ENTERING);
    })
  })];
}, _leaveRenders);
var enterRenders = (_enterRenders = {}, _enterRenders[modes.out] = function (_ref3) {
  var children = _ref3.children,
      changeState = _ref3.changeState;
  return react.cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(ENTERED, react.cloneElement(children, {
        in: true
      }));
    })
  });
}, _enterRenders[modes.in] = function (_ref4) {
  var current = _ref4.current,
      children = _ref4.children,
      changeState = _ref4.changeState;
  return [react.cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(ENTERED, react.cloneElement(children, {
        in: true
      }));
    })
  }), react.cloneElement(children, {
    in: true
  })];
}, _enterRenders);
/**
 * A transition component inspired by the [vue transition modes](https://vuejs.org/v2/guide/transitions.html#Transition-Modes).
 * You can use it when you want to control the render between state transitions.
 * Based on the selected mode and the child's key which is the `Transition` or `CSSTransition` component, the `SwitchTransition` makes a consistent transition between them.
 *
 * If the `out-in` mode is selected, the `SwitchTransition` waits until the old child leaves and then inserts a new child.
 * If the `in-out` mode is selected, the `SwitchTransition` inserts a new child first, waits for the new child to enter and then removes the old child.
 *
 * **Note**: If you want the animation to happen simultaneously
 * (that is, to have the old child removed and a new child inserted **at the same time**),
 * you should use
 * [`TransitionGroup`](https://reactcommunity.org/react-transition-group/transition-group)
 * instead.
 *
 * ```jsx
 * function App() {
 *  const [state, setState] = useState(false);
 *  return (
 *    <SwitchTransition>
 *      <CSSTransition
 *        key={state ? "Goodbye, world!" : "Hello, world!"}
 *        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
 *        classNames='fade'
 *      >
 *        <button onClick={() => setState(state => !state)}>
 *          {state ? "Goodbye, world!" : "Hello, world!"}
 *        </button>
 *      </CSSTransition>
 *    </SwitchTransition>
 *  );
 * }
 * ```
 *
 * ```css
 * .fade-enter{
 *    opacity: 0;
 * }
 * .fade-exit{
 *    opacity: 1;
 * }
 * .fade-enter-active{
 *    opacity: 1;
 * }
 * .fade-exit-active{
 *    opacity: 0;
 * }
 * .fade-enter-active,
 * .fade-exit-active{
 *    transition: opacity 500ms;
 * }
 * ```
 */

var SwitchTransition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(SwitchTransition, _React$Component);

  function SwitchTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      status: ENTERED,
      current: null
    };
    _this.appeared = false;

    _this.changeState = function (status, current) {
      if (current === void 0) {
        current = _this.state.current;
      }

      _this.setState({
        status: status,
        current: current
      });
    };

    return _this;
  }

  var _proto = SwitchTransition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
  };

  SwitchTransition.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (props.children == null) {
      return {
        current: null
      };
    }

    if (state.status === ENTERING && props.mode === modes.in) {
      return {
        status: ENTERING
      };
    }

    if (state.current && areChildrenDifferent(state.current, props.children)) {
      return {
        status: EXITING
      };
    }

    return {
      current: react.cloneElement(props.children, {
        in: true
      })
    };
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        mode = _this$props.mode,
        _this$state = this.state,
        status = _this$state.status,
        current = _this$state.current;
    var data = {
      children: children,
      current: current,
      changeState: this.changeState,
      status: status
    };
    var component;

    switch (status) {
      case ENTERING:
        component = enterRenders[mode](data);
        break;

      case EXITING:
        component = leaveRenders[mode](data);
        break;

      case ENTERED:
        component = current;
    }

    return /*#__PURE__*/react.createElement(TransitionGroupContext.Provider, {
      value: {
        isMounting: !this.appeared
      }
    }, component);
  };

  return SwitchTransition;
}(react.Component);

SwitchTransition.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Transition modes.
   * `out-in`: Current element transitions out first, then when complete, the new element transitions in.
   * `in-out`: New element transitions in first, then when complete, the current element transitions out.
   *
   * @type {'out-in'|'in-out'}
   */
  mode: propTypes.oneOf([modes.in, modes.out]),

  /**
   * Any `Transition` or `CSSTransition` component.
   */
  children: propTypes.oneOfType([propTypes.element.isRequired])
} : {};
SwitchTransition.defaultProps = {
  mode: modes.out
};

var esm = /*#__PURE__*/Object.freeze({
  __proto__: null,
  CSSTransition: CSSTransition,
  ReplaceTransition: ReplaceTransition,
  SwitchTransition: SwitchTransition,
  TransitionGroup: TransitionGroup,
  Transition: Transition,
  config: config
});

var reactAnimationComponents = createCommonjsModule(function (module, exports) {
!function(t,e){module.exports=e(react,propTypes,esm);}(commonjsGlobal,function(t,e,r){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n});},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=54)}([function(t,e,r){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=r(35),i="object"==("undefined"==typeof self?"undefined":n(self))&&self&&self.Object===Object&&self,u=o||i||Function("return this")();t.exports=u;},function(e,r){e.exports=t;},function(t,r){t.exports=e;},function(t,e,r){function n(t,e){var r=i(t,e);return o(r)?r:void 0}var o=r(72),i=r(78);t.exports=n;},function(t,e,r){function n(t){return null!=t&&"object"==(void 0===t?"undefined":o(t))}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports=n;},function(t,e,r){var n=Array.isArray;t.exports=n;},function(t,e,r){function n(t){return null==t?void 0===t?a:c:s&&s in Object(t)?i(t):u(t)}var o=r(8),i=r(74),u=r(75),c="[object Null]",a="[object Undefined]",s=o?o.toStringTag:void 0;t.exports=n;},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);}return t},o=(e.getInlineStyles=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.style,r=void 0===e?{}:e,o=t.delay,i=t.duration,u=t.timingFn;return n({},r,{transitionDelay:o+"ms",transitionDuration:i+"ms",transitionTimingFunction:u})},e.getTimeoutValue=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.delay,r=void 0===e?0:e,n=t.duration;return r+(void 0===n?0:n)},e.defaultAnimationProps={appear:!0,delay:0,duration:500,timingFn:"ease"});e.createCommonKnobs=function(t){return {inProp:t.boolean("in",!0),delay:t.number("delay",o.delay),duration:t.number("duration",o.duration),timingFn:t.text("timingFn",o.timingFn)}},e.onceEvery=function(t,e){var r=t;return function(){return --t<1?(t=r,e.apply(this,arguments)):null}};},function(t,e,r){var n=r(0),o=n.Symbol;t.exports=o;},function(t,e,r){function n(t){var e=void 0===t?"undefined":o(t);return null!=t&&("object"==e||"function"==e)}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports=n;},function(t,e,r){function n(t,e,r,n){var u=!r;r||(r={});for(var c=-1,a=e.length;++c<a;){var s=e[c],f=n?n(r[s],t[s],s,r,t):void 0;void 0===f&&(f=t[s]),u?i(r,s,f):o(r,s,f);}return r}var o=r(38),i=r(39);t.exports=n;},function(t,e,r){function n(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1]);}}var o=r(62),i=r(63),u=r(64),c=r(65),a=r(66);n.prototype.clear=o,n.prototype.delete=i,n.prototype.get=u,n.prototype.has=c,n.prototype.set=a,t.exports=n;},function(t,e,r){function n(t,e){for(var r=t.length;r--;)if(o(t[r][0],e))return r;return -1}var o=r(33);t.exports=n;},function(t,e,r){var n=r(3),o=n(Object,"create");t.exports=o;},function(t,e,r){function n(t,e){var r=t.__data__;return o(e)?r["string"==typeof e?"string":"hash"]:r.map}var o=r(87);t.exports=n;},function(t,e){t.exports=r;},function(t,e,r){var n=r(3),o=r(0),i=n(o,"Map");t.exports=i;},function(t,e,r){function n(t){return u(t)?o(t):i(t)}var o=r(41),i=r(99),u=r(46);t.exports=n;},function(t,e,r){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t};},function(t,e,r){function n(t){return function(e){return t(e)}}t.exports=n;},function(t,e,r){(function(t){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=r(35),i="object"==n(e)&&e&&!e.nodeType&&e,u=i&&"object"==n(t)&&t&&!t.nodeType&&t,c=u&&u.exports===i,a=c&&o.process,s=function(){try{return a&&a.binding&&a.binding("util")}catch(t){}}();t.exports=s;}).call(e,r(18)(t));},function(t,e,r){function n(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||o)}var o=Object.prototype;t.exports=n;},function(t,e,r){var n=r(107),o=r(48),i=Object.prototype,u=i.propertyIsEnumerable,c=Object.getOwnPropertySymbols,a=c?function(t){return null==t?[]:(t=Object(t),n(c(t),function(e){return u.call(t,e)}))}:o;t.exports=a;},function(t,e,r){function n(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}t.exports=n;},function(t,e,r){var n=r(45),o=n(Object.getPrototypeOf,Object);t.exports=o;},function(t,e,r){var n=r(110),o=r(16),i=r(111),u=r(112),c=r(113),a=r(6),s=r(36),f=s(n),p=s(o),l=s(i),y=s(u),d=s(c),v=a;(n&&"[object DataView]"!=v(new n(new ArrayBuffer(1)))||o&&"[object Map]"!=v(new o)||i&&"[object Promise]"!=v(i.resolve())||u&&"[object Set]"!=v(new u)||c&&"[object WeakMap]"!=v(new c))&&(v=function(t){var e=a(t),r="[object Object]"==e?t.constructor:void 0,n=r?s(r):"";if(n)switch(n){case f:return "[object DataView]";case p:return "[object Map]";case l:return "[object Promise]";case y:return "[object Set]";case d:return "[object WeakMap]"}return e}),t.exports=v;},function(t,e,r){function n(t){var e=new t.constructor(t.byteLength);return new o(e).set(new o(t)),e}var o=r(116);t.exports=n;},function(t,e,r){function n(t,e){return o(t)?t:i(t,e)?[t]:u(c(t))}var o=r(5),i=r(128),u=r(129),c=r(132);t.exports=n;},function(t,e,r){function n(t){return "symbol"==(void 0===t?"undefined":o(t))||u(t)&&i(t)==c}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=r(6),u=r(4),c="[object Symbol]";t.exports=n;},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);}return t},o=r(1),i=function(t){return t&&t.__esModule?t:{default:t}}(o),u=(r(2),r(15)),c=r(7),a=function(t){var e={entered:{opacity:t.enterOpacity},entering:{opacity:t.exitOpacity},exited:{opacity:t.exitOpacity},exiting:{opacity:t.exitOpacity}};return i.default.createElement(u.Transition,n({timeout:(0, c.getTimeoutValue)(t)},t),function(r){return i.default.createElement("div",{className:t.className,style:n({},(0, c.getInlineStyles)(t),e[r],{transitionProperty:"opacity",willChange:"opacity"})},t.children)})};a.defaultProps=n({},c.defaultAnimationProps,{enterOpacity:1,exitOpacity:0}),e.default=a;},function(t,e,r){function n(t,e){var r={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r}Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);}return t},i=r(1),u=function(t){return t&&t.__esModule?t:{default:t}}(i),c=(r(2),r(15)),a=r(7),s=function(t){var e=t.children,r=t.enterTransform,i=t.exitTransform,s=n(t,["children","enterTransform","exitTransform"]),f={entering:i,entered:r,exiting:i,exited:i};return u.default.createElement(c.Transition,o({timeout:(0, a.getTimeoutValue)(s)},s),function(t){return u.default.createElement("div",{className:s.className,style:o({},(0, a.getInlineStyles)(s),{transform:f[t],transitionProperty:"transform",willChange:"transform"})},e)})};s.defaultProps=o({},a.defaultAnimationProps,{enterTransform:"none",exitTransform:"none"}),e.default=s;},function(t,e,r){var n=r(32),o=r(60),i=r(127),u=r(27),c=r(10),a=r(138),s=r(140),f=r(51),p=s(function(t,e){var r={};if(null==t)return r;var s=!1;e=n(e,function(e){return e=u(e,t),s||(s=e.length>1),e}),c(t,f(t),r),s&&(r=o(r,7,a));for(var p=e.length;p--;)i(r,e[p]);return r});t.exports=p;},function(t,e,r){function n(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}t.exports=n;},function(t,e,r){function n(t,e){return t===e||t!==t&&e!==e}t.exports=n;},function(t,e,r){function n(t){if(!i(t))return !1;var e=o(t);return e==c||e==a||e==u||e==s}var o=r(6),i=r(9),u="[object AsyncFunction]",c="[object Function]",a="[object GeneratorFunction]",s="[object Proxy]";t.exports=n;},function(t,e,r){(function(e){var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n="object"==(void 0===e?"undefined":r(e))&&e&&e.Object===Object&&e;t.exports=n;}).call(e,r(73));},function(t,e,r){function n(t){if(null!=t){try{return i.call(t)}catch(t){}try{return t+""}catch(t){}}return ""}var o=Function.prototype,i=o.toString;t.exports=n;},function(t,e,r){function n(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1]);}}var o=r(79),i=r(86),u=r(88),c=r(89),a=r(90);n.prototype.clear=o,n.prototype.delete=i,n.prototype.get=u,n.prototype.has=c,n.prototype.set=a,t.exports=n;},function(t,e,r){function n(t,e,r){var n=t[e];c.call(t,e)&&i(n,r)&&(void 0!==r||e in t)||o(t,e,r);}var o=r(39),i=r(33),u=Object.prototype,c=u.hasOwnProperty;t.exports=n;},function(t,e,r){function n(t,e,r){"__proto__"==e&&o?o(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r;}var o=r(40);t.exports=n;},function(t,e,r){var n=r(3),o=function(){try{var t=n(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=o;},function(t,e,r){function n(t,e){var r=u(t),n=!r&&i(t),f=!r&&!n&&c(t),l=!r&&!n&&!f&&s(t),y=r||n||f||l,d=y?o(t.length,String):[],v=d.length;for(var b in t)!e&&!p.call(t,b)||y&&("length"==b||f&&("offset"==b||"parent"==b)||l&&("buffer"==b||"byteLength"==b||"byteOffset"==b)||a(b,v))||d.push(b);return d}var o=r(93),i=r(42),u=r(5),c=r(43),a=r(96),s=r(97),f=Object.prototype,p=f.hasOwnProperty;t.exports=n;},function(t,e,r){var n=r(94),o=r(4),i=Object.prototype,u=i.hasOwnProperty,c=i.propertyIsEnumerable,a=n(function(){return arguments}())?n:function(t){return o(t)&&u.call(t,"callee")&&!c.call(t,"callee")};t.exports=a;},function(t,e,r){(function(t){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=r(0),i=r(95),u="object"==n(e)&&e&&!e.nodeType&&e,c=u&&"object"==n(t)&&t&&!t.nodeType&&t,a=c&&c.exports===u,s=a?o.Buffer:void 0,f=s?s.isBuffer:void 0,p=f||i;t.exports=p;}).call(e,r(18)(t));},function(t,e,r){function n(t){return "number"==typeof t&&t>-1&&t%1==0&&t<=o}var o=9007199254740991;t.exports=n;},function(t,e,r){function n(t,e){return function(r){return t(e(r))}}t.exports=n;},function(t,e,r){function n(t){return null!=t&&i(t.length)&&!o(t)}var o=r(34),i=r(44);t.exports=n;},function(t,e,r){function n(t){return u(t)?o(t,!0):i(t)}var o=r(41),i=r(102),u=r(46);t.exports=n;},function(t,e,r){function n(){return []}t.exports=n;},function(t,e,r){var n=r(23),o=r(24),i=r(22),u=r(48),c=Object.getOwnPropertySymbols,a=c?function(t){for(var e=[];t;)n(e,i(t)),t=o(t);return e}:u;t.exports=a;},function(t,e,r){function n(t,e,r){var n=e(t);return i(t)?n:o(n,r(t))}var o=r(23),i=r(5);t.exports=n;},function(t,e,r){function n(t){return o(t,u,i)}var o=r(50),i=r(49),u=r(47);t.exports=n;},function(t,e,r){function n(t){if("string"==typeof t||o(t))return t;var e=t+"";return "0"==e&&1/t==-i?"-0":e}var o=r(28),i=1/0;t.exports=n;},function(t,e,r){function n(t){return null==t?t:i.call(t)}var o=Array.prototype,i=o.reverse;t.exports=n;},function(t,e,r){function n(t){return t&&t.__esModule?t:{default:t}}var o=r(29),i=n(o),u=r(55),c=n(u),a=r(30),s=n(a),f=r(56),p=n(f),l=r(57),y=n(l),d=r(151),v=n(d);t.exports={Fade:i.default,FadeTransform:c.default,Loop:p.default,Random:y.default,Stagger:v.default,Transform:s.default};},function(t,e,r){function n(t){return t&&t.__esModule?t:{default:t}}function o(t,e){var r={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r}Object.defineProperty(e,"__esModule",{value:!0});var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);}return t},u=r(1),c=n(u),a=(r(2),r(29)),s=n(a),f=r(30),p=n(f),l=r(7),y=function(t){var e=t.children,r=t.fadeProps,n=t.transformProps,u=o(t,["children","fadeProps","transformProps"]);return c.default.createElement(s.default,i({},u,r),c.default.createElement(p.default,i({},u,n),e))};y.defaultProps=i({},l.defaultAnimationProps,{fadeProps:{},transformProps:{}}),e.default=y;},function(t,e,r){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n);}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),c=r(1),a=function(t){return t&&t.__esModule?t:{default:t}}(c),s=(r(2),function(t){function e(){var t,r,i,u;n(this,e);for(var c=arguments.length,a=Array(c),s=0;s<c;s++)a[s]=arguments[s];return r=i=o(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(a))),i.state={in:i.props.in},i.count=0,i.pendingOnComplete=null,i.pendingStateChange=null,i._toggleIn=function(){i.setState(function(t){return {in:!t.in}});},i._iterate=function(){i.count=i.count+.5,i.props.onIterate(i.count),i.count<i.props.iterations?i.pendingStateChange=setTimeout(i._toggleIn,i.props.interval):i.pendingOnComplete=setTimeout(i.props.onComplete,i.props.interval);},u=r,o(i,u)}return i(e,t),u(e,[{key:"componentWillReceiveProps",value:function(t){t.in&&this.setState({in:!0});}},{key:"componentWillUnmount",value:function(){this._clearTimeouts();}},{key:"_clearTimeouts",value:function(){clearTimeout(this.pendingStateChange),clearTimeout(this.pendingOnComplete);}},{key:"render",value:function(){return a.default.cloneElement(this.props.children,{duration:this.props.interval,in:this.state.in,onEntered:this._iterate,onExiting:this._iterate})}}]),e}(c.PureComponent));s.defaultProps={in:!1,interval:500,iterations:1/0,onComplete:Function.prototype,onIterate:Function.prototype},e.default=s;},function(t,e,r){function n(t){return t&&t.__esModule?t:{default:t}}function o(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}Object.defineProperty(e,"__esModule",{value:!0}),e.getRandomDelay=void 0;var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n);}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),s=r(1),f=n(s),p=(r(2),r(58)),l=n(p),y=r(31),d=n(y),v=r(53),b=n(v),h=r(7),m=e.getRandomDelay=function(t,e){var r=Math.round(Math.random()*e);return r>=t?r:t},x=function(t){function e(){var t,r,n,c;i(this,e);for(var a=arguments.length,s=Array(a),p=0;p<a;p++)s[p]=arguments[p];return r=n=u(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(s))),n.delays=f.default.Children.map(n.props.children,function(){return m(n.props.minDelay,n.props.maxDelay)}),n.reversedDelays=(0, b.default)([].concat(o(n.delays))),n.onCompleteTimeout=null,n.totalChildren=f.default.Children.count(n.props.children),n.onComplete=(0, h.onceEvery)(n.totalChildren,function(){var t=Math.max.apply(Math,o(n.delays));n.onCompleteTimeout=setTimeout(n.props.onComplete,t+n.props.duration);}),c=r,u(n,c)}return c(e,t),a(e,[{key:"componentWillUnmount",value:function(){clearTimeout(this.onCompleteTimeout);}},{key:"getTransitionProps",value:function(){return (0, d.default)(this.props,["children","duration","in","maxDelay","minDelay","onComplete","reverse"])}},{key:"render",value:function(){var t=this,e=this.props,r=e.children,n=e.duration,o=e.in,i=e.reverse,u=i?this.reversedDelays:this.delays;return f.default.createElement(l.default,this.getTransitionProps(),o&&f.default.Children.map(r,function(e,r){return f.default.cloneElement(e,{delay:u[r],duration:n,onEntered:t.onComplete,onExited:t.onComplete})}))}}]),e}(s.Component);x.defaultProps={duration:h.defaultAnimationProps.duration,in:!1,maxDelay:1500,minDelay:0,onComplete:Function.prototype,reverse:!1},e.default=x;},function(t,e,r){function n(t){return t&&t.__esModule?t:{default:t}}function o(t,e){var r={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e||"object"!==(void 0===e?"undefined":a(e))&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":a(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.__esModule=!0;var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);}return t},f=r(2),p=n(f),l=r(1),y=n(l),d=r(59),v=Object.values||function(t){return Object.keys(t).map(function(e){return t[e]})},b=(p.default.any,p.default.node,p.default.bool,p.default.bool,p.default.bool,p.default.func,{component:"div",childFactory:function(t){return t}}),h=function(t){function e(r,n){i(this,e);var o=u(this,t.call(this,r,n));return o.handleExited=function(t,e,r){var n=(0, d.getChildMapping)(o.props.children);t in n||(r&&r(e),o.setState(function(e){var r=s({},e.children);return delete r[t],{children:r}}));},o.state={children:(0, d.getChildMapping)(r.children,function(t){var e=function(e){o.handleExited(t.key,e,t.props.onExited);};return (0, l.cloneElement)(t,{onExited:e,in:!0,appear:o.getProp(t,"appear"),enter:o.getProp(t,"enter"),exit:o.getProp(t,"exit")})})},o}return c(e,t),e.prototype.getChildContext=function(){return {transitionGroup:{isMounting:!this.appeared}}},e.prototype.getProp=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.props;return null!=r[e]?r[e]:t.props[e]},e.prototype.componentDidMount=function(){this.appeared=!0;},e.prototype.componentWillReceiveProps=function(t){var e=this,r=this.state.children,n=(0, d.getChildMapping)(t.children),o=(0, d.mergeChildMappings)(r,n);Object.keys(o).forEach(function(i){var u=o[i];if((0, l.isValidElement)(u)){var c=function(t){e.handleExited(u.key,t,u.props.onExited);},a=i in r,s=i in n,f=r[i],p=(0, l.isValidElement)(f)&&!f.props.in;!s||a&&!p?s||!a||p?s&&a&&(0, l.isValidElement)(f)&&(o[i]=(0, l.cloneElement)(u,{onExited:c,in:f.props.in,exit:e.getProp(u,"exit",t),enter:e.getProp(u,"enter",t)})):o[i]=(0, l.cloneElement)(u,{in:!1}):o[i]=(0, l.cloneElement)(u,{onExited:c,in:!0,exit:e.getProp(u,"exit",t),enter:e.getProp(u,"enter",t)});}}),this.setState({children:o});},e.prototype.render=function(){var t=this.props,e=t.component,r=t.childFactory,n=o(t,["component","childFactory"]),i=this.state.children;return delete n.appear,delete n.enter,delete n.exit,y.default.createElement(e,n,v(i).map(r))},e}(y.default.Component);h.childContextTypes={transitionGroup:p.default.object.isRequired},h.propTypes={},h.defaultProps=b,e.default=h,t.exports=e.default;},function(t,e,r){function n(t,e){var r=function(t){return e&&(0, i.isValidElement)(t)?e(t):t},n=Object.create(null);return t&&i.Children.map(t,function(t){return t}).forEach(function(t){n[t.key]=r(t);}),n}function o(t,e){function r(r){return r in e?e[r]:t[r]}t=t||{},e=e||{};var n=Object.create(null),o=[];for(var i in t)i in e?o.length&&(n[i]=o,o=[]):o.push(i);var u=void 0,c={};for(var a in e){if(n[a])for(u=0;u<n[a].length;u++){var s=n[a][u];c[n[a][u]]=r(s);}c[a]=r(a);}for(u=0;u<o.length;u++)c[o[u]]=r(o[u]);return c}e.__esModule=!0,e.getChildMapping=n,e.mergeChildMappings=o;var i=r(1);},function(t,e,r){function n(t,e,r,F,D,I){var z,U=e&w,R=e&P,V=e&A;if(r&&(z=D?r(t,F,D,I):r(t)),void 0!==z)return z;if(!_(t))return t;var $=x(t);if($){if(z=b(t),!U)return f(t,z)}else {var B=v(t),W=B==E||B==T;if(g(t))return s(t,U);if(B==M||B==C||W&&!D){if(z=R||W?{}:m(t),!U)return R?l(t,a(z,t)):p(t,c(z,t))}else {if(!k[B])return D?t:{};z=h(t,B,U);}}I||(I=new o);var N=I.get(t);if(N)return N;if(I.set(t,z),O(t))return t.forEach(function(o){z.add(n(o,e,r,o,t,I));}),z;if(j(t))return t.forEach(function(o,i){z.set(i,n(o,e,r,i,t,I));}),z;var q=V?R?d:y:R?keysIn:S,G=$?void 0:q(t);return i(G||t,function(o,i){G&&(i=o,o=t[i]),u(z,i,n(o,e,r,i,t,I));}),z}var o=r(61),i=r(91),u=r(38),c=r(92),a=r(101),s=r(104),f=r(105),p=r(106),l=r(108),y=r(109),d=r(51),v=r(25),b=r(114),h=r(115),m=r(121),x=r(5),g=r(43),j=r(123),_=r(9),O=r(125),S=r(17),w=1,P=2,A=4,C="[object Arguments]",E="[object Function]",T="[object GeneratorFunction]",M="[object Object]",k={};k[C]=k["[object Array]"]=k["[object ArrayBuffer]"]=k["[object DataView]"]=k["[object Boolean]"]=k["[object Date]"]=k["[object Float32Array]"]=k["[object Float64Array]"]=k["[object Int8Array]"]=k["[object Int16Array]"]=k["[object Int32Array]"]=k["[object Map]"]=k["[object Number]"]=k[M]=k["[object RegExp]"]=k["[object Set]"]=k["[object String]"]=k["[object Symbol]"]=k["[object Uint8Array]"]=k["[object Uint8ClampedArray]"]=k["[object Uint16Array]"]=k["[object Uint32Array]"]=!0,k["[object Error]"]=k[E]=k["[object WeakMap]"]=!1,t.exports=n;},function(t,e,r){function n(t){var e=this.__data__=new o(t);this.size=e.size;}var o=r(11),i=r(67),u=r(68),c=r(69),a=r(70),s=r(71);n.prototype.clear=i,n.prototype.delete=u,n.prototype.get=c,n.prototype.has=a,n.prototype.set=s,t.exports=n;},function(t,e,r){function n(){this.__data__=[],this.size=0;}t.exports=n;},function(t,e,r){function n(t){var e=this.__data__,r=o(e,t);return !(r<0)&&(r==e.length-1?e.pop():u.call(e,r,1),--this.size,!0)}var o=r(12),i=Array.prototype,u=i.splice;t.exports=n;},function(t,e,r){function n(t){var e=this.__data__,r=o(e,t);return r<0?void 0:e[r][1]}var o=r(12);t.exports=n;},function(t,e,r){function n(t){return o(this.__data__,t)>-1}var o=r(12);t.exports=n;},function(t,e,r){function n(t,e){var r=this.__data__,n=o(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this}var o=r(12);t.exports=n;},function(t,e,r){function n(){this.__data__=new o,this.size=0;}var o=r(11);t.exports=n;},function(t,e,r){function n(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}t.exports=n;},function(t,e,r){function n(t){return this.__data__.get(t)}t.exports=n;},function(t,e,r){function n(t){return this.__data__.has(t)}t.exports=n;},function(t,e,r){function n(t,e){var r=this.__data__;if(r instanceof o){var n=r.__data__;if(!i||n.length<c-1)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new u(n);}return r.set(t,e),this.size=r.size,this}var o=r(11),i=r(16),u=r(37),c=200;t.exports=n;},function(t,e,r){function n(t){return !(!u(t)||i(t))&&(o(t)?d:s).test(c(t))}var o=r(34),i=r(76),u=r(9),c=r(36),a=/[\\^$.*+?()[\]{}|]/g,s=/^\[object .+?Constructor\]$/,f=Function.prototype,p=Object.prototype,l=f.toString,y=p.hasOwnProperty,d=RegExp("^"+l.call(y).replace(a,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=n;},function(t,e,r){var n,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this");}catch(t){"object"===("undefined"==typeof window?"undefined":o(window))&&(n=window);}t.exports=n;},function(t,e,r){function n(t){var e=u.call(t,a),r=t[a];try{t[a]=void 0;var n=!0;}catch(t){}var o=c.call(t);return n&&(e?t[a]=r:delete t[a]),o}var o=r(8),i=Object.prototype,u=i.hasOwnProperty,c=i.toString,a=o?o.toStringTag:void 0;t.exports=n;},function(t,e,r){function n(t){return i.call(t)}var o=Object.prototype,i=o.toString;t.exports=n;},function(t,e,r){function n(t){return !!i&&i in t}var o=r(77),i=function(){var t=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();t.exports=n;},function(t,e,r){var n=r(0),o=n["__core-js_shared__"];t.exports=o;},function(t,e,r){function n(t,e){return null==t?void 0:t[e]}t.exports=n;},function(t,e,r){function n(){this.size=0,this.__data__={hash:new o,map:new(u||i),string:new o};}var o=r(80),i=r(11),u=r(16);t.exports=n;},function(t,e,r){function n(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1]);}}var o=r(81),i=r(82),u=r(83),c=r(84),a=r(85);n.prototype.clear=o,n.prototype.delete=i,n.prototype.get=u,n.prototype.has=c,n.prototype.set=a,t.exports=n;},function(t,e,r){function n(){this.__data__=o?o(null):{},this.size=0;}var o=r(13);t.exports=n;},function(t,e,r){function n(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}t.exports=n;},function(t,e,r){function n(t){var e=this.__data__;if(o){var r=e[t];return r===i?void 0:r}return c.call(e,t)?e[t]:void 0}var o=r(13),i="__lodash_hash_undefined__",u=Object.prototype,c=u.hasOwnProperty;t.exports=n;},function(t,e,r){function n(t){var e=this.__data__;return o?void 0!==e[t]:u.call(e,t)}var o=r(13),i=Object.prototype,u=i.hasOwnProperty;t.exports=n;},function(t,e,r){function n(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=o&&void 0===e?i:e,this}var o=r(13),i="__lodash_hash_undefined__";t.exports=n;},function(t,e,r){function n(t){var e=o(this,t).delete(t);return this.size-=e?1:0,e}var o=r(14);t.exports=n;},function(t,e,r){function n(t){var e=void 0===t?"undefined":o(t);return "string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports=n;},function(t,e,r){function n(t){return o(this,t).get(t)}var o=r(14);t.exports=n;},function(t,e,r){function n(t){return o(this,t).has(t)}var o=r(14);t.exports=n;},function(t,e,r){function n(t,e){var r=o(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this}var o=r(14);t.exports=n;},function(t,e,r){function n(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&!1!==e(t[r],r,t););return t}t.exports=n;},function(t,e,r){function n(t,e){return t&&o(e,i(e),t)}var o=r(10),i=r(17);t.exports=n;},function(t,e,r){function n(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}t.exports=n;},function(t,e,r){function n(t){return i(t)&&o(t)==u}var o=r(6),i=r(4),u="[object Arguments]";t.exports=n;},function(t,e,r){function n(){return !1}t.exports=n;},function(t,e,r){function n(t,e){var r=void 0===t?"undefined":o(t);return !!(e=null==e?i:e)&&("number"==r||"symbol"!=r&&u.test(t))&&t>-1&&t%1==0&&t<e}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=9007199254740991,u=/^(?:0|[1-9]\d*)$/;t.exports=n;},function(t,e,r){var n=r(98),o=r(19),i=r(20),u=i&&i.isTypedArray,c=u?o(u):n;t.exports=c;},function(t,e,r){function n(t){return u(t)&&i(t.length)&&!!c[o(t)]}var o=r(6),i=r(44),u=r(4),c={};c["[object Float32Array]"]=c["[object Float64Array]"]=c["[object Int8Array]"]=c["[object Int16Array]"]=c["[object Int32Array]"]=c["[object Uint8Array]"]=c["[object Uint8ClampedArray]"]=c["[object Uint16Array]"]=c["[object Uint32Array]"]=!0,c["[object Arguments]"]=c["[object Array]"]=c["[object ArrayBuffer]"]=c["[object Boolean]"]=c["[object DataView]"]=c["[object Date]"]=c["[object Error]"]=c["[object Function]"]=c["[object Map]"]=c["[object Number]"]=c["[object Object]"]=c["[object RegExp]"]=c["[object Set]"]=c["[object String]"]=c["[object WeakMap]"]=!1,t.exports=n;},function(t,e,r){function n(t){if(!o(t))return i(t);var e=[];for(var r in Object(t))c.call(t,r)&&"constructor"!=r&&e.push(r);return e}var o=r(21),i=r(100),u=Object.prototype,c=u.hasOwnProperty;t.exports=n;},function(t,e,r){var n=r(45),o=n(Object.keys,Object);t.exports=o;},function(t,e,r){function n(t,e){return t&&o(e,i(e),t)}var o=r(10),i=r(47);t.exports=n;},function(t,e,r){function n(t){if(!o(t))return u(t);var e=i(t),r=[];for(var n in t)("constructor"!=n||!e&&a.call(t,n))&&r.push(n);return r}var o=r(9),i=r(21),u=r(103),c=Object.prototype,a=c.hasOwnProperty;t.exports=n;},function(t,e,r){function n(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e}t.exports=n;},function(t,e,r){(function(t){function n(t,e){if(e)return t.slice();var r=t.length,n=f?f(r):new t.constructor(r);return t.copy(n),n}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=r(0),u="object"==o(e)&&e&&!e.nodeType&&e,c=u&&"object"==o(t)&&t&&!t.nodeType&&t,a=c&&c.exports===u,s=a?i.Buffer:void 0,f=s?s.allocUnsafe:void 0;t.exports=n;}).call(e,r(18)(t));},function(t,e,r){function n(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}t.exports=n;},function(t,e,r){function n(t,e){return o(t,i(t),e)}var o=r(10),i=r(22);t.exports=n;},function(t,e,r){function n(t,e){for(var r=-1,n=null==t?0:t.length,o=0,i=[];++r<n;){var u=t[r];e(u,r,t)&&(i[o++]=u);}return i}t.exports=n;},function(t,e,r){function n(t,e){return o(t,i(t),e)}var o=r(10),i=r(49);t.exports=n;},function(t,e,r){function n(t){return o(t,u,i)}var o=r(50),i=r(22),u=r(17);t.exports=n;},function(t,e,r){var n=r(3),o=r(0),i=n(o,"DataView");t.exports=i;},function(t,e,r){var n=r(3),o=r(0),i=n(o,"Promise");t.exports=i;},function(t,e,r){var n=r(3),o=r(0),i=n(o,"Set");t.exports=i;},function(t,e,r){var n=r(3),o=r(0),i=n(o,"WeakMap");t.exports=i;},function(t,e,r){function n(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&i.call(t,"index")&&(r.index=t.index,r.input=t.input),r}var o=Object.prototype,i=o.hasOwnProperty;t.exports=n;},function(t,e,r){function n(t,e,r){var n=t.constructor;switch(e){case h:return o(t);case s:case f:return new n(+t);case m:return i(t,r);case x:case g:case j:case _:case O:case S:case w:case P:case A:return a(t,r);case p:return new n;case l:case v:return new n(t);case y:return u(t);case d:return new n;case b:return c(t)}}var o=r(26),i=r(117),u=r(118),c=r(119),a=r(120),s="[object Boolean]",f="[object Date]",p="[object Map]",l="[object Number]",y="[object RegExp]",d="[object Set]",v="[object String]",b="[object Symbol]",h="[object ArrayBuffer]",m="[object DataView]",x="[object Float32Array]",g="[object Float64Array]",j="[object Int8Array]",_="[object Int16Array]",O="[object Int32Array]",S="[object Uint8Array]",w="[object Uint8ClampedArray]",P="[object Uint16Array]",A="[object Uint32Array]";t.exports=n;},function(t,e,r){var n=r(0),o=n.Uint8Array;t.exports=o;},function(t,e,r){function n(t,e){var r=e?o(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}var o=r(26);t.exports=n;},function(t,e,r){function n(t){var e=new t.constructor(t.source,o.exec(t));return e.lastIndex=t.lastIndex,e}var o=/\w*$/;t.exports=n;},function(t,e,r){function n(t){return u?Object(u.call(t)):{}}var o=r(8),i=o?o.prototype:void 0,u=i?i.valueOf:void 0;t.exports=n;},function(t,e,r){function n(t,e){var r=e?o(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}var o=r(26);t.exports=n;},function(t,e,r){function n(t){return "function"!=typeof t.constructor||u(t)?{}:o(i(t))}var o=r(122),i=r(24),u=r(21);t.exports=n;},function(t,e,r){var n=r(9),o=Object.create,i=function(){function t(){}return function(e){if(!n(e))return {};if(o)return o(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();t.exports=i;},function(t,e,r){var n=r(124),o=r(19),i=r(20),u=i&&i.isMap,c=u?o(u):n;t.exports=c;},function(t,e,r){function n(t){return i(t)&&o(t)==u}var o=r(25),i=r(4),u="[object Map]";t.exports=n;},function(t,e,r){var n=r(126),o=r(19),i=r(20),u=i&&i.isSet,c=u?o(u):n;t.exports=c;},function(t,e,r){function n(t){return i(t)&&o(t)==u}var o=r(25),i=r(4),u="[object Set]";t.exports=n;},function(t,e,r){function n(t,e){return e=o(e,t),null==(t=u(t,e))||delete t[c(i(e))]}var o=r(27),i=r(134),u=r(135),c=r(52);t.exports=n;},function(t,e,r){function n(t,e){if(i(t))return !1;var r=void 0===t?"undefined":o(t);return !("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!u(t))||(a.test(t)||!c.test(t)||null!=e&&t in Object(e))}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=r(5),u=r(28),c=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;t.exports=n;},function(t,e,r){var n=r(130),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,u=n(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(o,function(t,r,n,o){e.push(n?o.replace(i,"$1"):r||t);}),e});t.exports=u;},function(t,e,r){function n(t){var e=o(t,function(t){return r.size===i&&r.clear(),t}),r=e.cache;return e}var o=r(131),i=500;t.exports=n;},function(t,e,r){function n(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(i);var r=function r(){var n=arguments,o=e?e.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var u=t.apply(this,n);return r.cache=i.set(o,u)||i,u};return r.cache=new(n.Cache||o),r}var o=r(37),i="Expected a function";n.Cache=o,t.exports=n;},function(t,e,r){function n(t){return null==t?"":o(t)}var o=r(133);t.exports=n;},function(t,e,r){function n(t){if("string"==typeof t)return t;if(u(t))return i(t,n)+"";if(c(t))return f?f.call(t):"";var e=t+"";return "0"==e&&1/t==-a?"-0":e}var o=r(8),i=r(32),u=r(5),c=r(28),a=1/0,s=o?o.prototype:void 0,f=s?s.toString:void 0;t.exports=n;},function(t,e,r){function n(t){var e=null==t?0:t.length;return e?t[e-1]:void 0}t.exports=n;},function(t,e,r){function n(t,e){return e.length<2?t:o(t,i(e,0,-1))}var o=r(136),i=r(137);t.exports=n;},function(t,e,r){function n(t,e){e=o(e,t);for(var r=0,n=e.length;null!=t&&r<n;)t=t[i(e[r++])];return r&&r==n?t:void 0}var o=r(27),i=r(52);t.exports=n;},function(t,e,r){function n(t,e,r){var n=-1,o=t.length;e<0&&(e=-e>o?0:o+e),r=r>o?o:r,r<0&&(r+=o),o=e>r?0:r-e>>>0,e>>>=0;for(var i=Array(o);++n<o;)i[n]=t[n+e];return i}t.exports=n;},function(t,e,r){function n(t){return o(t)?void 0:t}var o=r(139);t.exports=n;},function(t,e,r){function n(t){if(!u(t)||o(t)!=c)return !1;var e=i(t);if(null===e)return !0;var r=p.call(e,"constructor")&&e.constructor;return "function"==typeof r&&r instanceof r&&f.call(r)==l}var o=r(6),i=r(24),u=r(4),c="[object Object]",a=Function.prototype,s=Object.prototype,f=a.toString,p=s.hasOwnProperty,l=f.call(Object);t.exports=n;},function(t,e,r){function n(t){return u(i(t,void 0,o),t+"")}var o=r(141),i=r(144),u=r(146);t.exports=n;},function(t,e,r){function n(t){return (null==t?0:t.length)?o(t,1):[]}var o=r(142);t.exports=n;},function(t,e,r){function n(t,e,r,u,c){var a=-1,s=t.length;for(r||(r=i),c||(c=[]);++a<s;){var f=t[a];e>0&&r(f)?e>1?n(f,e-1,r,u,c):o(c,f):u||(c[c.length]=f);}return c}var o=r(23),i=r(143);t.exports=n;},function(t,e,r){function n(t){return u(t)||i(t)||!!(c&&t&&t[c])}var o=r(8),i=r(42),u=r(5),c=o?o.isConcatSpreadable:void 0;t.exports=n;},function(t,e,r){function n(t,e,r){return e=i(void 0===e?t.length-1:e,0),function(){for(var n=arguments,u=-1,c=i(n.length-e,0),a=Array(c);++u<c;)a[u]=n[e+u];u=-1;for(var s=Array(e+1);++u<e;)s[u]=n[u];return s[e]=r(a),o(t,this,s)}}var o=r(145),i=Math.max;t.exports=n;},function(t,e,r){function n(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}t.exports=n;},function(t,e,r){var n=r(147),o=r(150),i=o(n);t.exports=i;},function(t,e,r){var n=r(148),o=r(40),i=r(149),u=o?function(t,e){return o(t,"toString",{configurable:!0,enumerable:!1,value:n(e),writable:!0})}:i;t.exports=u;},function(t,e,r){function n(t){return function(){return t}}t.exports=n;},function(t,e,r){function n(t){return t}t.exports=n;},function(t,e,r){function n(t){var e=0,r=0;return function(){var n=u(),c=i-(n-r);if(r=n,c>0){if(++e>=o)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}var o=800,i=16,u=Date.now;t.exports=n;},function(t,e,r){function n(t){return t&&t.__esModule?t:{default:t}}function o(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}Object.defineProperty(e,"__esModule",{value:!0}),e.getMaxDelay=e.getStaggerDelay=void 0;var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n);}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),s=r(1),f=n(s),p=(r(2),r(15)),l=r(31),y=n(l),d=r(53),v=n(d),b=r(7),h=e.getStaggerDelay=function(t,e,r){return e?t%e*r:t*r},m=e.getMaxDelay=function(t,e,r,n){return e?(e-1)*r+n:(t-1)*r+n},x=function(t){function e(){var t,r,n,c;i(this,e);for(var a=arguments.length,s=Array(a),p=0;p<a;p++)s[p]=arguments[p];return r=n=u(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(s))),n.delays=f.default.Children.map(n.props.children,function(t,e){return h(e,n.props.chunk,n.props.delay,n.props.duration)}),n.reversedDelays=(0, v.default)([].concat(o(n.delays))),n.onCompleteTimeout=null,n.totalChildren=f.default.Children.count(n.props.children),n.onComplete=(0, b.onceEvery)(n.totalChildren,function(){var t=n.props,e=t.chunk,r=t.delay,o=t.duration,i=m(n.totalChildren,e,r,o);n.onCompleteTimeout=setTimeout(n.props.onComplete,i);}),c=r,u(n,c)}return c(e,t),a(e,[{key:"componentWillUnmount",value:function(){clearTimeout(this.onCompleteTimeout);}},{key:"getTransitionGroupProps",value:function(){return (0, y.default)(this.props,["delay","duration","chunk","in","onComplete","reverse"])}},{key:"render",value:function(){var t=this,e=this.props,r=e.children,n=e.duration,o=e.in,i=e.reverse,u=i?this.reversedDelays:this.delays;return f.default.createElement(p.TransitionGroup,this.getTransitionGroupProps(),o&&f.default.Children.map(r,function(e,r){return f.default.cloneElement(e,{delay:u[r],duration:n,onEntered:t.onComplete,onExited:t.onComplete})}))}}]),e}(s.Component);x.defaultProps={chunk:0,delay:100,duration:b.defaultAnimationProps.duration,in:!1,onComplete:Function.prototype,reverse:!1},e.default=x;}])});
});

var reactAnimationComponents$1 = /*@__PURE__*/getDefaultExportFromCjs(reactAnimationComponents);

export default reactAnimationComponents$1;
