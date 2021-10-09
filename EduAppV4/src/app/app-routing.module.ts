import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./page/login/login.module').then(m => m.LoginPageModule)
  },
  
  {
    path: 'edit-user',
    loadChildren: () => import('./page/edit-user/edit-user.module').then( m => m.EditUserPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'newuser',
    loadChildren: () => import('./page/newuser/newuser.module').then( m => m.NewuserPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./page/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'fileupview',
    loadChildren: () => import('./page/fileupview/fileupview.module').then( m => m.FileupviewPageModule)
  },
  {
    path: 'assignmentview',
    loadChildren: () => import('./page/assignmentview/assignmentview.module').then( m => m.AssignmentviewPageModule)
  },
  {
    path: 'subjects',
    loadChildren: () => import('./page/subjects/subjects.module').then( m => m.SubjectsPageModule)
  },
  {
    path: 'lessonsview',
    loadChildren: () => import('./page/lessonsview/lessonsview.module').then( m => m.LessonsviewPageModule)
  },
  {
    path: 'quick-submit',
    loadChildren: () => import('./page/quick-submit/quick-submit.module').then( m => m.QuickSubmitPageModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./page/support/support.module').then( m => m.SupportPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./page/forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'update-user',
    loadChildren: () => import('./page/update-user/update-user.module').then( m => m.UpdateUserPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
