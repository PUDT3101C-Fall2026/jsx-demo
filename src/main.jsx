import { createRoot } from "react-dom/client";

let root = createRoot(document.getElementById("diary"))

root.render(
    <p>
        Today is Wednesday. For lunch, I had a pita sandwich. After finishing
        my pita sandwich, I walked to school. Today, we're talking about 3
        things: the JSX language, React state and React components. This is
        good, because computers make me feel happy.
    </p>
);