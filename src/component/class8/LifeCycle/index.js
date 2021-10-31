// Lifecycle of Components

// Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.
// The three phases are: Mounting, Updating, and Unmounting (from w3schools)


// there are four phase in Lifecycle
// 1. Mounting
// 2. Updating
// 3. Unmounting
// 4. Error handling


// 1. Mounting Phase
    // * consturctor()
    // * static getDerivedStateFromProps(props, state)
    // * render()
    // * componentDidMount


// 2. Updating Phase

    // First: mounting ..........................
    // * constructor()
    // * static getDerivedStateFromProps(props, state)
    // * render()

    // Second: updating .........................
    // * static getDerivedStateFromProps(props, state)
    // * render()
    // * getSnapshotBeforeUpdate()
    // * componentDidUpdate()
    // * shouldComponentUpdate()  // rarely used

// 3. Unmounting 
    // * componentWillUnmount()