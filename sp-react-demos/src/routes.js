import FunctionalPropsContainer from './demos/FunctionalPropsContainer';
import ClassPropsContainer from './demos/ClassPropsContainer';
import PassingData from './demos/PassingData';
import Transactions from './tx/Transactions';
import Demos from './Demos';
import ReduxCounter from './demos/ReduxCounter';
import JSXExamples from './demos/JSXExamples';
import TreeComponent from './demos/TreeComponent';
import ConditionalDemo from './demos/ConditionalDemo';
import EventHandling from './demos/EventHandling';
import UsingState from './demos/UsingState';
import CustomEvents from './demos/CustomEvents';
import PropTypesContainer from './demos/PropTypesDemo';
import ListsAndKeys from './demos/ListsAndKeys';
import SortingLists from './demos/SortingLists';
import PersonListContainer from './demos/ReactNoReduxNoThunk';
import DynamicPersonListContainer from './demos/ReactNoReduxFetch';
import ReduxPersonListContainer from './demos/ReactReduxFetch';
import ConnectedComponent from './demos/ConnectedComponent';
import ReduxContainer from './demos/ReactReduxContainers';
import ReduxMiddlewareLogger from './demos/ReduxMiddlewareLogger';
import ReduxDevtools from './demos/ReduxDevtools';
import LifecycleMethods from './demos/LifecycleMethods';
import PeopleDAODemo from './demos/PeopleDAODemo';
import BasicRouting from './demos/BasicRouting';
import ProgrammaticRouting from './demos/ProgrammaticRouting';
import RedirectedRouting from './demos/RedirectedRouting';
import RoutingParameters from './demos/RoutingParameters';
import ControlledComponents from './demos/ControlledComponents';
import UncontrolledComponents from './demos/UncontrolledComponents';

const routes = [
  {
    path: '/tx',
    component: Transactions,
  },
  {
    path: '/demos',
    component: Demos,
    routes: [
      {
        path: '/demos/functional-props',
        component: FunctionalPropsContainer,
        label: 'Functional Component with props'
      },
      {
        path: '/demos/class-props',
        component: ClassPropsContainer,
        label: 'Class Component with props'
      },
      {
        path: '/demos/passing-data',
        component: PassingData,
        label: 'Passing Data'
      },
      {
        path: '/demos/redux-counter',
        component: ReduxCounter,
        label: 'Incremental counter with Redux'
      },
      {
        path: '/demos/jsx-examples',
        component: JSXExamples,
        label: 'JSX Examples'
      },
      {
        path: '/demos/tree-component',
        component: TreeComponent,
        label: 'TreeComponent'
      },
      {
        path: '/demos/conditional-demo',
        component: ConditionalDemo,
        label: 'Using components conditionally'
      },
      {
        path: '/demos/event-handling',
        component: EventHandling,
        label: 'Event Handling'
      },
      {
        path: '/demos/using-state',
        component: UsingState,
        label: 'Using State'
      },
      {
        path: '/demos/custom-events',
        component: CustomEvents,
        label: 'Custom Events'
      },
      {
        path: '/demos/prop-types',
        component: PropTypesContainer,
        label: 'PropTypes Demo'
      },
      {
        path: '/demos/lists-and-keys',
        component: ListsAndKeys,
        label: 'Lists and keys'
      },
      {
        path: '/demos/sorting-lists',
        component: SortingLists,
        label: 'Sorting Lists'
      },
      {
        path: '/demos/lifecycle-methods',
        component: LifecycleMethods,
        label: 'Lifecycle Methods'
      },
      {
        path: '/demos/people-dao',
        component: PeopleDAODemo,
        label: 'People DAO'
      },
      {
        path: '/demos/basic-routing',
        component: BasicRouting,
        label: 'Basic Routing'
      },
      {
        path: '/demos/programmatic-routing',
        component: ProgrammaticRouting,
        label: 'Programmatic Routing'
      },
      {
        path: '/demos/redirected-routing',
        component: RedirectedRouting,
        label: 'Redirected Routing'
      },
      {
        path: '/demos/routing-params',
        component: RoutingParameters,
        label: 'Routing Parameters'
      },
      {
        path: '/demos/controlled-components',
        component: ControlledComponents,
        label: 'Controlled Components'
      },
      {
        path: '/demos/uncontrolled-components',
        component: UncontrolledComponents,
        label: 'Uncontrolled Components'
      },
      {
        path: '/demos/redux-counter',
        component: ReduxCounter,
        label: 'Redux Counter'
      },
      {
        path: '/demos/connected-component',
        component: ConnectedComponent,
        label: 'Connected (to Redux) Component'
      },
      {
        path: '/demos/redux-container',
        component: ReduxContainer,
        label: 'Redux-connected container'
      },
      {
        path: '/demos/redux-middleware-logger',
        component: ReduxMiddlewareLogger,
        label: 'Redux with middleware'
      },
      {
        path: '/demos/redux-devtools',
        component: ReduxDevtools,
        label: 'Redux devtools'
      },
      {
        path: '/demos/thunk-one',
        component: PersonListContainer,
        label: '(Thunk part 1) List of people (no async)'
      },
      {
        path: '/demos/thunk-two',
        component: DynamicPersonListContainer,
        label: '(Thunk part 2) List of people (async, no thunk, no Redux)'
      },
      {
        path: '/demos/thunk-three',
        component: ReduxPersonListContainer,
        label: '(Thunk part 3) List of people with Redux and Thunk'
      }
    ]
  }
];

export default routes;