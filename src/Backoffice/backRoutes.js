import ActivitiesForm from '../Components/Activities/ActivitiesForm';
import BackOfficeActivities from '../Components/Activities/backoffice';
import CategoriesForm from '../Components/Categories/CategoriesForm';
import TableCategorie from '../Components/Categories/TableCategorie';
import EditForm from '../Components/Dashboard/EditForm';
import EditHomeForm from '../Components/Dashboard/editHomeForm';
import UserList from '../Components/Dashboard/UsersList';
import Members from '../Components/Members';
import MembersForm from '../Components/Members/MembersForm';
import NewsForm from '../Components/News/NewsForm';
import NewsList from '../Components/News/NewsList';
import ProjectsForm from '../Components/Projects/ProjectsForm';
import SlidesForm from '../Components/Slides/SlidesForm';
import SlidesTable from '../Components/Slides/SlidesTable';
import TestimonialForm from '../Components/Testimonials/TestimonialsForm';
import UserForm from '../Components/Users/UsersForm';

export const backRoutes = [
  {
    path: '/backoffice/activities',
    component: BackOfficeActivities
  },
  {
    path: '/backoffice/activities/form',
    component: ActivitiesForm
  },
  {
    path: '/backoffice/news',
    component: NewsList
  },
  {
    path: '/backoffice/news/form',
    component: NewsForm
  },
  {
    path: '/backoffice/news/form:id',
    component: NewsForm
  },

  {
    path: '/backoffice/news',
    component: NewsList
  },
  {
    path: '/backoffice/users',
    component: UserList
  },
  {
    path: '/backoffice/users/form',
    component: UserForm
  },
  {
    path: '/backoffice/categories',
    component: TableCategorie
  },
  {
    path: '/backoffice/categories/form',
    component: CategoriesForm
  },

  {
    path: '/backoffice/slides',
    component: SlidesTable
  },
  {
    path: '/backoffice/slides/form',
    component: SlidesForm
  },
  {
    path: '/backoffice/organization/form',
    component: EditForm
  },
  {
    path: '/backoffice/members/form',
    component: MembersForm
  },
  {
    path: '/backoffice/members',
    component: Members
  },
  {
    path: '/backoffice/projects/form:id',
    component: ProjectsForm
  },
  {
    path: '/backoffice/projects/form',
    component: ProjectsForm
  },

  {
    path: '/backoffice/testimonials/form',
    component: TestimonialForm
  },
  {
    path: '/backoffice/organization/edit-home',
    component: EditHomeForm
  }
];
