import CMS from 'netlify-cms-app';
import { TagControl, TagPreview } from '../components/tag_widget';
CMS.registerWidget('tags', TagControl, TagPreview);
