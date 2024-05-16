import { FormControlItem, MenuItem, Option } from "./types";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


export const menuItems: MenuItem[] = [
  {
    id: "home",
    label: "Home",
    path: "/",
  },
  {
    id: "category",
    label: "Category",
    path: "/category/application",
  },
  {
    id: "blogs",
    label: "Blogs",
    path: "/blogs",
  },
  {
    id: "search",
    label: "Search",
    path: "/search",
  },
];

export const categories: Option[] = [
  {
    value: "application",
    label: "Application",
  },
  {
    value: "data",
    label: "Data",
  },
  {
    value: "software",
    label: "Software",
  },
  {
    value: "tech",
    label: "Technology",
  },
  {
    value: "science",
    label: "Science",
  },
];

export const formControls: FormControlItem[] = [
  {
    id: "title",
    label: "Title",
    placeholder: "Enter Blog Title",
    type: "text",
    component: "input",
    options: [],
  },
  {
    id: "description",
    label: "Description",
    placeholder: "Enter Blog Description",
    type: "text",
    component: "textarea",
    options: [],
  },
  {
    id: "category",
    label: "Category",
    placeholder: "Choose Blog Category",
    type: "",
    component: "select",
    options: categories,
  },
];

export const firebaseConfig = {

  apiKey: "AIzaSyDNqlTpb1qmAwfwN-CxrWuXQTDMOWNfSSw",
  authDomain: "blogmanager-ae510.firebaseapp.com",
  projectId: "blogmanager-ae510",
  storageBucket: "blogmanager-ae510.appspot.com",
  messagingSenderId: "61899704848",
  appId: "1:61899704848:web:7a36e632874cf70bb85895",
  measurementId: "G-SPDSPWDPM9"

};


// Initialize Firebase

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const initialBlogFormData = {
 title :  '',
 description : '',
 image : '',
 category : '' 
}


