
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Member } from 'types';
import { withNavigation } from 'react-navigation';

interface MembersListProps {
  navigation: any;
  members: Member[];
  onMemberPress: (memberId: string) => void;
}

const MembersList: React.FC<MembersListProps> = ({ navigation, members, onMemberPress }) => {
  const { t } = useTranslation();

  useEffect(() => {
    // Check if the member is invited and not yet confirmed
    const checkMemberStatus = (member: Member) => {
      // Hypothetical check for invited member status
      if (member.invited && !member.confirmed) {
        // Handle the case where the member is invited but not confirmed
        // This could involve navigating to a different screen or displaying a message
        // For example, you could navigate to a "Pending Member" screen
        navigation.navigate('PendingMember', { memberId: member.id });
      }
    };

    members.forEach(checkMemberStatus);
  }, [members, navigation]);

  return (
    <View style={styles.container}>
      {members.map((member) => (
        <View key={member.id} style={styles.memberRow} onPress={() => onMemberPress(member.id)}>
          <Text style={styles.memberName}>{member.name}</Text>
          {/* Additional member details */}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Styles for the container
  },
  memberRow: {
    // Styles for each member row
  },
  memberName: {
    // Styles for member name
  },
});

export default withNavigation(MembersList);