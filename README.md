# react-scroll-to-next

`react-scroll-to-next` is a React component that enables smooth scrolling between sections of a webpage. When you click on the button positioned at the bottom-right corner, the page scrolls to the next section. Once the last section is reached, clicking the button loops back to the first section. This is useful for creating smooth, interactive websites where users can easily navigate through content by scrolling through different sections.

## Features

- **Smooth Scroll:** Scroll between sections smoothly with `scrollIntoView`.
- **Circular Navigation:** After reaching the last section, the button loops back to the first section.
- **Customizable:** You can style the button as needed by passing in a `style` prop.
- **Positioning:** The button is always fixed at the bottom-right corner, making it easy for users to navigate between sections.To install `react-scroll-to-next` via npm, run the following command:

```bash
npm install react-scroll-to-next
```

Alternatively, you can install it using yarn:

```bash
yarn add react-scroll-to-next
```

## Usage/Examples

To use react-scroll-to-next in your React application, follow these steps:

- Create refs for each section you want to scroll through.
- Pass the refs array to the ScrollToNext component.
- Click the button to smoothly scroll between sections.

### Examples

```typescript
import React, { useRef } from "react";
import { ScrollToNext } from "react-scroll-to-next";

const App: React.FC = () => {
  // Create refs for each section
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  // Define the sections array
  const sections = [section1Ref, section2Ref, section3Ref];

  return (
    <div>
      <div
        ref={section1Ref}
        style={{ height: "100vh", backgroundColor: "#f1f1f1" }}
      >
        <h2>Section 1</h2>
      </div>
      <div
        ref={section2Ref}
        style={{ height: "100vh", backgroundColor: "#e0e0e0" }}
      >
        <h2>Section 2</h2>
      </div>
      <div
        ref={section3Ref}
        style={{ height: "100vh", backgroundColor: "#d0d0d0" }}
      >
        <h2>Section 3</h2>
      </div>

      {/* ScrollToNext button */}
      <ScrollToNext sections={sections} />
    </div>
  );
};

export default App;
```

## Props

| Prop       | Type                             | Description                                                                                                                                     | Default               |
| ---------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `sections` | `React.RefObject<HTMLElement>[]` | An array of refs that reference the sections you want to scroll through. Each section must be wrapped with `ref` using `useRef` or `createRef`. | -                     |
| `style`    | `React.CSSProperties`            | An optional prop to customize the styling of the button. You can override the default button styling with this prop.                            | Default style applies |
| `x and y`    | `React.CSSProperties`            | x: Determines the horizontal distance from the right edge of the screen. y: Determines the vertical distance from the bottom edge of the screen.                            | Default style applies |



## Button Styling

By default, the button is a fixed, circular button located at the bottom-right corner of the screen. It contains a simple arrow (➤) to indicate that it scrolls to the next section. You can easily style the button further by passing a custom style object to the component.

Example:

```javascript
<ScrollToNext
  sections={sections}
  style={{
    backgroundColor: "#4CAF50",
    padding: "15px",
    fontSize: "20px",
    borderRadius: "50%",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
  }}
/>
```
## Horizontal and Vertical Offset
If x or y is not provided, they default to "20px".
x : Determines the horizontal distance from the right edge of the screen. 
y : Determines the vertical distance from the bottom edge of the screen. 

```javascript
   <ScrollToNext sections={sections} x={"5px"} y={"10px"}/>
```

## Contributing

Feel free to open issues and submit pull requests if you have suggestions or bug fixes. Your contributions are welcome!

[Github](https://github.com/malharchauhan7/scroll-to-next)

## License

[ISC]()

## Author

Malhar Chauhan [Github](https://github.com/malharchauhan7/scroll-to-next)
