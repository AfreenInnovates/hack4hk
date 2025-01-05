## HOW TO ADD ITEMS TO SIDEBAR

- Go to `src/components/Sidebar/Sidebar.tsx`
- Add a new item to the `menuItems` array at where you want it to appear in the sidebar
- Each item should have the following properties:
  - `title`: The text to display for the item
  - `url`: The path to navigate to when the item is clicked
  - `icon`: The icon to display next to the item

## ADDING PATHS TO ROUTES

- Go to `src/router/Paths/paths.ts`
- Define a new path
- Add your path to the `paths` object
- Go to `src/router/Router/Router.tsx`
- Import your path from the `useRoutePaths` hook
- Follow the existing pattern to add your path
