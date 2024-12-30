# Drawing Pad Library 🖋️  

[![npm version](https://img.shields.io/npm/v/react-native-drawing-board)](https://www.npmjs.com/package/react-native-drawing-board)  
[![license](https://img.shields.io/npm/l/react-native-drawing-board)](LICENSE)  
[![Downloads](https://img.shields.io/npm/dw/react-native-drawing-board)](https://www.npmjs.com/package/react-native-drawing-board)  

A lightweight and customizable writing pad component for React Native!  
Perfect for creating a drawing pad, signature pad, or simply a canvas for your app users.  

---

### ✨ Features  

- 🖍️ Smooth drawing experience with cubic bezier curves.  
- ✏️ Fully customizable - control pen colors, stroke thickness, and more.  
- 🎨 Support for saving as images (PNG, JPG).  
- 🔄 Clear and reset canvas functionality.  
- 📱 Optimized for both Android and iOS.  

---

## 🛠️Installation

```bash
yarn add react-native-drawing-board
```

or

```bash
npm install --save react-native-drawing-board
```



## Properties

---

| Prop                                |                   Type                   | Description                                                                                                                                           |
| :---------------------------------- | :--------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| viewShotRef |                `ref`                | A React reference.   |
| path                           |                `array`                 | A state variable to store the path of the drawing.|
| setPath                     |                 `function`                 | A function to update the path value whenever the drawing is saved or cleared.|

## Notes

- **`ref`**:  A React reference.
- **`path`**: A state variable to store the path of the drawing.
- **`setPath`**: A function to update the path value whenever the drawing is saved or cleared.
