import React from "react";

const Blogs = () => {
  return (
    <div className=" container ">
      Blogs
      <h3>How will you improve the performance of a React Application?</h3>
      <p>
        To improve the performance of a React Application I will use Immutable
        Data Structures, Function/Stateless Components and React.PureComponent,
        Multiple Chunk Files, Production Mode Flag in Webpack, Dependency
        optimization, React.Fragments to Avoid Additional HTML Element Wrappers,
        Avoid Inline Function Definition in the Render Function, Throttling and
        Debouncing Event Action in JavaScript, Avoid using Index as Key for the
        map, Avoiding Props in the Initial States, Spreading props on DOM
        elements, Use Reselect in Redux to Avoid Frequent Re-render, Avoid Async
        Initialization in componentWillMount(), Memoize React Components, CSS
        Animations Instead of JS Animations, Using a CDN, Using Web Workers for
        CPU Extensive Tasks, Virtualize Long Lists, Analyzing and Optimizing
        Your Webpack Bundle Bloat, Consider Server-side Rendering, Enable Gzip
        Compression on Web Server
      </p>
      <h3>
        What are the different ways to manage a state in a React application?
      </h3>
      <p>
        There are four main types of states that need to manage React apps
        properly: Local state Local state is data we manage in one or another
        component. Global state Global state is data we manage across multiple
        Server state Data that comes from an external server must be integrated
        with our UI state. URL state Data that exists on our URLs, including the
        pathname and query parameters. Local (UI) stateGlobal (UI)
        statecomponents. Server stateURL state Data that exists on our URLs,
        including the pathname and query parameters.
      </p>
      <h3>How does prototypical inheritance work?</h3>
      <p>
        To put it another way, prototype inheritance is the capacity to access
        object attributes from another object. To extend the functionality of an
        existing object constructor, we utilize a JavaScript prototype. We can
        instruct our JS code to inherit attributes from a prototype this way.
        Through the use of a reference pointer function, prototypical
        inheritance enables us to reuse attributes or methods from one
        JavaScript object to another. A prototype's attributes and functions are
        inherited by all JavaScript objects: Date.prototype is passed down to
        all Date objects. Array.prototype is the prototype that all array
        objects are based on. Player.prototype is passed down to all Player
        objects. The prototype inheritance chain is headed by the
        Object.prototype. Object.prototype is passed down to Date objects, Array
        objects, and Player objects.
      </p>
      <h3>
        Why you do not set the state directly in React. For example, if you have
        const [products, setProducts] = useState([]). Why you do not set
        products = [...] instead, you use the setProduct
      </h3>
      <p>
        Because of the following reasons, it is never a good idea to change the
        state directly: If we change it immediately, the alteration you made may
        be overwritten if we execute setState() later. This.state is not changed
        instantly when you directly update the state. Instead, it generates a
        pending state transition, which will only yield the current value if
        accessed after using this function. Across all components, we will lose
        control of the state.
      </p>
      <h3>What is a unit test? Why should write unit tests?</h3>
      <p>
        Unit testing's primary goal is to confirm that each individual component
        functions properly and as intended. Only the various pieces of the
        system will be able to function properly. The software developers
        themselves carry out unit testing. These tests are sometimes done by
        independent software testers.
      </p>
    </div>
  );
};

export default Blogs;
