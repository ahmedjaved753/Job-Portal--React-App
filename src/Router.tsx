import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { JobPostingsPage } from './pages/JobPostingsPage'
import JobDetailsPage from './pages/JobDetailsPage/index'
import NewJobPostingPage from './pages/NewJobPostingPage/index'

const routes = {
  home: '/',
  jobs: '/jobs/:id'
}

export const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={routes.home}>
        <JobPostingsPage />
      </Route>
      <Route exact path="/jobs/:id">
        <JobDetailsPage />
      </Route>
      <Route exact path="/job_postings/new">
        <NewJobPostingPage />
      </Route>
    </Switch>
  </BrowserRouter>
)
