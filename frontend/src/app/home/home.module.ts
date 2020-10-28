import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeRoutingModule } from 'src/app/home/home-routing.module';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';



@NgModule({
  declarations: [HomeComponent, HeaderComponent, IntroductionComponent, AboutMeComponent, SkillsComponent, ExperienceComponent, ProjectsComponent, BlogComponent, ContactComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    HomeRoutingModule,
  ]
})
export class HomeModule { }
