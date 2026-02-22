export type SkillCategory = 'Languages' | 'Frameworks' | 'Tools';

export type Skill = {
  name: string;
  category: SkillCategory;
  level: 1 | 2 | 3 | 4 | 5;
  icon: string;
};
