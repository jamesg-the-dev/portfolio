import Angular from '../assets/AngularJS.png'
import JavaScript from '../assets/JavaScript.png'
import PHP from '../assets/PHP.png'
import ReactLogo from '../assets/React.png'
import TypeScript from '../assets/TypeScript.png'
import Vue from '../assets/VueJS.png'
export interface LanguageLogo {
  logo?: string;
  language: string;
  content?: string;
}
export const Logos: LanguageLogo[] = [
  {
    logo: Vue,
    language: 'VueJS',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit ut aliquam purus sit amet luctus. Convallis convallis tellus id interdum velit.'
  },
  {
    logo: Angular,
    language: 'AngularJS',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    logo: JavaScript,
    language: 'JavaScript',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet non curabitur gravida arcu. Risus in hendrerit gravida rutrum quisque non tellus. Tortor at auctor urna nunc id cursus metus. Auctor eu augue ut lectus arcu bibendum.'
  },
  {
    logo: PHP,
    language: 'PHP',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    logo: ReactLogo,
    language: 'React',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum nibh tellus molestie nunc. Ultrices dui sapien eget mi. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Massa enim nec dui nunc mattis enim ut tellus elementum.'
  },
  {
    logo: TypeScript,
    language: 'TypeScript',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In iaculis nunc sed augue. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant.'
  }
]