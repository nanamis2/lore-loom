import App from "./App"
import ErrorPage from "./components/errorPage";
import AnimePage from "./components/animePage"
import BooksPage from "./components/booksPage"
import MoviesPage from "./components/moviesPage"
import WebNovelsPage from "./components/webNovelsPage"
import MangaPage from "./components/mangaPage"

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true, element: <AnimePage />,
            },
            {
                path: "books", element: <BooksPage />,
            },

            {
                path: "anime", element: <AnimePage />,
            },

            {
                path: "movies", element: <MoviesPage />,
            },

            {
                path: "webnovels", element: <WebNovelsPage />,
            },

            {
                path: "manga", element: <MangaPage />,
            },
            
        ]
    }
];

export default routes;