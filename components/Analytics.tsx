// 'use client';

import React from 'react';
import {
  CollectionBrowser,
  EditableDashboard,
  InteractiveDashboard,
  InteractiveQuestion,
  MetabaseProvider,
  StaticDashboard,
  StaticQuestion,
} from '@metabase/embedding-sdk-react';
import { Divider, Title } from '@mantine/core';

const config = {
  metabaseInstanceUrl: 'http://localhost:3000', // Required: Your Metabase instance URL
  jwtProviderUri: '/api/sso/metabase', // Required: An endpoint in your app that returns signs the user in and delivers a token
};

export default function Analytics() {
  return (
    <MetabaseProvider config={config}>
      <Title order={2}>{'<InteractiveQuestion />'}</Title>
      <InteractiveQuestion questionId={2249} />
      <Divider my="lg" />

      <Title order={2}>{'<StaticQuestion />'}</Title>
      <StaticQuestion questionId={2249} />
      <Divider my="lg" />

      <Title order={2}>{'<InteractiveDashboard />'}</Title>
      <InteractiveDashboard dashboardId={8} />
      <Divider my="lg" />

      <Title order={2}>{'<StaticDashboard />'}</Title>
      <StaticDashboard dashboardId={8} />
      <Divider my="lg" />

      <Title order={2}>{'<EditableDashboard />'}</Title>
      <EditableDashboard dashboardId={8} />
      <Divider my="lg" />

      <Title order={2}>{'<CollectionBrowser />'}</Title>
      <CollectionBrowser />
      <Divider my="lg" />
    </MetabaseProvider>
  );
}
