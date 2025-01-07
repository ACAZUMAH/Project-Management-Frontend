import { BrowserRouter as  Router, Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/apolloClient";
import Header from "./components/header";
import Home from "./pages/home";
import Project from "./pages/project";
import NotFound from "./pages/notFound";

const App = () => {
  return (
    <Fragment>
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="/project/:id" element={ <Project /> }/>
              <Route path="*" element={ <NotFound /> } />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </Fragment>
  );
}; 

export default App;
