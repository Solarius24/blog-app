import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import BlogLayout from "./pages/BlogLayout";
import BlogPostsPage, { loader as blogPostLoader } from "./pages/BlogPosts";
import NewPostPage, {action as newPostAction} from "./pages/NewPost";
import PostDetailPage, { loader as blogPostLoader2 } from "./pages/PostDetail";
import RootLayout from "./pages/RootLayout";
import WelcomePage from "./pages/Welcome";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}errorElement={<ErrorPage/>}>
      <Route index element={<WelcomePage />} />
      <Route path="/blog" element={<BlogLayout />}>
        <Route index element={<BlogPostsPage />} loader={blogPostLoader} />
        <Route
          path=":id"
          element={<PostDetailPage/>}
          loader={blogPostLoader2}
          errorElement={<p>An error occured</p>}
        />
      </Route>
      <Route path="/blog/new" element={<NewPostPage />} action={newPostAction} />
    </Route>
  )
); 

function App() {
  return <RouterProvider router={router} />;
}

export default App;
