import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/root";
import Home from "../pages/home/Home";
import SignInForm from "../pages/authentication/SignIn";
import SignUp from "../pages/authentication/SignUp";
import UserProfilePage from "../pages/user-pages/UserProfilePage";
import WatchHistory from "../pages/user-pages/WatchHistory";
import LikedVideoPage from "../pages/user-pages/LikedVideoPage";
import SavedPlaylistsPage from "../pages/user-pages/SavedPlaylistsPage";
import PrivetRoute from "./PrivetRoute";
import VideoPlayer from "../pages/VideoPlayer";
import VideoPlayerTest from "../pages/VideoPlayerTest";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/user-profile",
                element: <PrivetRoute>
                    <UserProfilePage />
                </PrivetRoute>
            },
            {
                path: "/history",
                element: <WatchHistory />
            },
            {
                path: "/liked-videos",
                element: <LikedVideoPage />
            },
            {
                path: "/playlists",
                element: <SavedPlaylistsPage />
            },
            // {
            //     path: "/play-video/:id",
            //     element: <VideoPlayer />
            // },
            {
                path: "/play-video/:id",
                element: <VideoPlayerTest />
            },
        ]
    },
    {
        path: "/sign-in",
        element: <SignInForm />
    },
    {
        path: "/sign-up",
        element: <SignUp />
    }
])