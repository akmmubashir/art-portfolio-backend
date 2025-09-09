import type { Schema, Struct } from '@strapi/strapi';

export interface ProjectProjectList extends Struct.ComponentSchema {
  collectionName: 'components_project_project_lists';
  info: {
    displayName: 'projectList';
    icon: 'apps';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    bgImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    bgImageMob: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    bgVector: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    color: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'text-[]'>;
    subTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'subTitle'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<'title'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'project.project-list': ProjectProjectList;
    }
  }
}
