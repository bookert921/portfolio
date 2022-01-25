# MUI, Styled-Engine-SC, and Dark Mode

## Dark Mode

All of the styling is done with Material UI, which by default has a mode property in it's theme for both light and dark. To change the mode value the documentation recommends using the `createTheme` helper function.

Taking things a step further, I defined a custom palette based on some designs that inspired me and created a function to get the palette based on the mode.

These examples are from the documentation at [MUI Dark Mode](https://mui.com/customization/dark-mode/#main-content).

1. Create a function that returns the palette based on the mode.

```javascript
const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: amber,
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
      }
```

2. Create a trigger to toggle the mode.

```javascript
const [mode, setMode] =
  React.useState < PaletteMode > "light";
const colorMode = React.useMemo(
  () => ({
    // The dark mode switch would invoke this method
    toggleColorMode: () => {
      setMode((prevMode: PaletteMode) =>
        prevMode === "light" ? "dark" : "light"
      );
    },
  }),
  []
);
```

3. Tie theme to theme provider, remembering that it is dependant on the mode.

```javascript
// Update the theme only if the mode changes
const theme = React.useMemo(
  () => createTheme(getDesignTokens(mode)),
  [mode]
);
```

4. Context can be used to wrap the theme provider and provide the toggle function.

```javascript
return (
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <Page />
    </ThemeProvider>
  </ColorModeContext.Provider>
);
```
