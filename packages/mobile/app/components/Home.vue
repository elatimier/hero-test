<template>
  <Frame>
    <Page>
      <ActionBar title="Hero" />
      <TabView>
        <TabViewItem title="Record">
          <RecordActivity />
        </TabViewItem>
        <TabViewItem title="History">
          <ActivityHistory />
        </TabViewItem>
        <TabViewItem title="Profile">
          <UserProfile />
        </TabViewItem>
      </TabView>
    </Page>
  </Frame>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RecordActivity from './RecordActivity.vue';
import ActivityHistory from './ActivityHistory.vue';
import UserProfile from './UserProfile.vue';

export default defineComponent({
  components: {
    RecordActivity,
    ActivityHistory,
    UserProfile,
  },
});
</script>