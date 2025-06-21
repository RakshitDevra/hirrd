import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/app-layout";
import LandingPage from "./pages/landing";
import OnBoarding from "./pages/onboarding";
import JobListing from "./pages/joblisting";
import PostJob from "./pages/postjob";
import JobPage from "./pages/job";
import SavedJobs from "./pages/saved-job";
import MyJobs from "./pages/myjobs";
import { ThemeProvider } from "./components/theme-provider"; // Updated import
import ProtectedRoute from "./components/protected-route";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element:(
          <ProtectedRoute>
          <OnBoarding />
          </ProtectedRoute>
        ) ,
      },
      {
        path: "/jobs",
        element:(
          <ProtectedRoute>
          <JobListing />,
          </ProtectedRoute>
        ) 
      },
      {
        path: "/job/:id",
        element:(
          <ProtectedRoute>
          <JobListing />
          </ProtectedRoute>
        ),
      },
      {
        path: "/post-job",
        element: (
          <ProtectedRoute>
          <PostJob />
          </ProtectedRoute>
        ),
      },
      {
        path: "/saved-jobs",
        element: (
          <ProtectedRoute>
          <SavedJobs />
          </ProtectedRoute>
        ),
      },
      {
        path: "/my-jobs",
        element:(
          <ProtectedRoute>
            <SavedJobs />
          </ProtectedRoute>
        )
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
