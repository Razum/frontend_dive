import React from 'react';
import BorderImage from '@/pages/CSS/BorderImage';
import ObjectPosition from '@/pages/CSS/ObjectPosition';
import LogicalProperties from '@/pages/CSS/LogicalProperties';
import HasPseudoClass from '@/pages/CSS/HasPseudoClass';

export default {
  css: [
    {
      title: 'Border-image',
      url: '/css/border-image',
      component: <BorderImage />,
    },
    {
      title: 'Object-position',
      url: '/css/object-position',
      component: <ObjectPosition />,
    },
    {
      title: 'Logical properties',
      url: '/css/logical-properties',
      component: <LogicalProperties />
    },
    {
      title: 'Has pseudo class',
      url: '/css/has-pseudo-class',
      component: <HasPseudoClass />,
    },
  ],
  js: [],
};
