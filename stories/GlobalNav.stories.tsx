import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react';
import GlobalNav from "../@theme/layouts/global/GlobalHeader";


export default {
  titile: "COMPONENTS/Global Nav",
  component: GlobalNav
} as ComponentMeta<typeof GlobalNav>;


export const brandedNav = () => <GlobalNav brand="website.et" />