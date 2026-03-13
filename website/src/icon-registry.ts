import { 
  Home, HamburgerMenu, Kebab, ArrowDown, ArrowRight, ArrowUp,
  Check, Star, Mail, List,
  User, UserCheck,
  Plus, Minus,
  Dot, Triangle, Square, SquareOutline, SquareDotted 
} from '../../src'; 

export const ALL_ICONS = [
  // Core & Navigation
  { name: 'Home', component: Home, tags: ['main', 'house'] },
  { name: 'HamburgerMenu', component: HamburgerMenu, tags: ['nav', 'menu', 'bars'] },
  { name: 'Kebab', component: Kebab, tags: ['food', 'skewer', 'dots'] },
  { name: 'ArrowDown', component: ArrowDown, tags: ['direction', 'bottom'] },
  { name: 'ArrowRight', component: ArrowRight, tags: ['direction', 'next'] },
  { name: 'ArrowUp', component: ArrowUp, tags: ['direction', 'top'] },

  // Actions & Feedback
  { name: 'Check', component: Check, tags: ['done', 'success', 'tick'] },
  { name: 'Star', component: Star, tags: ['favorite', 'rating', 'score'] },
  { name: 'Mail', component: Mail, tags: ['email', 'envelope', 'message'] },
  { name: 'List', component: List, tags: ['bullets', 'tasks', 'todo'] },

  // User & Profile
  { name: 'User', component: User, tags: ['profile', 'account', 'person'] },
  { name: 'UserCheck', component: UserCheck, tags: ['verified', 'profile', 'success'] },

  // Math & Controls
  { name: 'Plus', component: Plus, tags: ['add', 'increment', 'new'] },
  { name: 'Minus', component: Minus, tags: ['remove', 'decrement', 'line'] },

  // Geometric Shapes
  { name: 'Dot', component: Dot, tags: ['circle', 'point', 'status'] },
  { name: 'Triangle', component: Triangle, tags: ['shape', 'delta', 'up'] },
  { name: 'Square', component: Square, tags: ['filled', 'box', 'block'] },
  { name: 'SquareOutline', component: SquareOutline, tags: ['box', 'frame', 'checkbox'] },
  { name: 'SquareDotted', component: SquareDotted, tags: ['border', 'placeholder', 'dashed'] },
];