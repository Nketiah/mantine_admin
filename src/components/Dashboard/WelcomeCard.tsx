import { Card, Title, Space, List, ThemeIcon, Text } from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons-react';

export function WelcomeCard() {
	return (
		<Card radius="md">
			<Title order={5} c="indigo">
				Welcome back!
			</Title>
			<Text fz="sm" c="dimmed" fw="500">
				Skote Crypto Dashboard
			</Text>
			<Space h="sm" />
			<List
				center
				size="sm"
				spacing="sm"
				icon={
					<ThemeIcon color="teal" size={22} radius="xl">
						<IconCircleCheck size="1rem" />
					</ThemeIcon>
				}
			>
				<List.Item>If several languages coalesce</List.Item>
				<List.Item>Sed ut perspiciatis unde</List.Item>
				<List.Item>It would be necessary</List.Item>
			</List>
		</Card>
	);
}
