import type { Schema, Struct } from '@strapi/strapi';

export interface ContactSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_contact_social_medias';
  info: {
    displayName: 'socialMedia';
    icon: 'connector';
  };
  attributes: {
    dayIcon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    link: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    nightIcon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<'Email'>;
  };
}

export interface ProjectImageList extends Struct.ComponentSchema {
  collectionName: 'components_project_image_lists';
  info: {
    displayName: 'imageList';
    icon: 'landscape';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    width: Schema.Attribute.Enumeration<['Full Width', 'Half Width']> &
      Schema.Attribute.Required;
  };
}

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

export interface ProjectVideoList extends Struct.ComponentSchema {
  collectionName: 'components_project_video_lists';
  info: {
    displayName: 'videoList';
    icon: 'play';
  };
  attributes: {
    video: Schema.Attribute.Media<'videos'> &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    width: Schema.Attribute.Enumeration<['Full Width', 'Half Width']> &
      Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'contact.social-media': ContactSocialMedia;
      'project.image-list': ProjectImageList;
      'project.project-list': ProjectProjectList;
      'project.video-list': ProjectVideoList;
    }
  }
}
