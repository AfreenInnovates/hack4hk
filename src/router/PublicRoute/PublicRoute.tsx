/* eslint-disable react/react-in-jsx-scope */
import { ReactNode, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

type Props = {
  children: ReactNode;
};

function PublicRoute(props: Props) {
  const { children } = props;

  //   const { user, loadingUserData } = useSession();

  //   if (loadingUserData) {
  //     return null;
  //   }

  //   if (user) {
  //     return <Navigate to="/" />;
  //   }

  return (
    <ErrorBoundary fallback={<h1>An error occured</h1>}>
      <Suspense fallback={<p>Loading</p>}>{children}</Suspense>
    </ErrorBoundary>
  );
}

export default PublicRoute;
