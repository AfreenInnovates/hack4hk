## HOW TO CREATE COMPONENTS

- Go to `src/components`
- Create a new folder for your component
  - tip: Use PascalCase for the folder name
  - example: `src/components/MyComponent`
  - tip: split your component into smaller components if it is too large (split as small as possible)
- Inside the folder, create the following files:
  - `MyComponent.tsx`: The main component file
  - `index.ts`: The entry file for the component
    - Which exports the main component
    - syntax: `export { default as MyComponent } from './MyComponent'`
  - `types.ts`: The typescript types for the component (you can leave this empty if you are not familiar with typescript)
  - `components`: A folder to store any sub-components that are used by the main component (the folder)
  - `componets/index.ts`: The entry file for the sub-components
    - Which exports all the sub-components
    - syntax: `export { default as SubComponent } from './SubComponent'`
  - `components/SubComponent.tsx`: The sub-component file
  - `components/types.ts`: The typescript types for the sub-component
  - note: under components inside a folder, there isn't a need to create a nested folder for each component. You can just create the component files directly under the components folder
- In the `MyComponent.tsx` file, write the component code

  - tip: Use functional components with hooks
  - syntax:
  - ```tsx
    import React from 'react';

    const MyComponent: React.FC = () => {
      return <div>My Component</div>;
    };

    export default MyComponent;
    ```

- use tailwindcss for styling
  - tip: Use utility classes for styling
  - example: `<div className="bg-gray-100 text-gray-800 p-4">My Component</div>`
