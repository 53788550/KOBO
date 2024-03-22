
import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import CourseDetails from './courseDetails';

const studentData = [
  { name: 'Artificial Intelligence', description: 'Artificial Intelligence (AI) is a branch of computer science that aims to create intelligent machines capable of performing tasks that typically require human intelligence. These tasks include learning, problem-solving, perception, and language understanding.', imageSource: require('./photo.png') },
  { name: 'Digital Marketing', description: 'Digital Marketing is the use of digital channels such as search engines, social media, email, and other websites to connect with current and prospective customers. It encompasses various online tactics and strategies to reach business goals.', imageSource: require('./photo1.png') },
  { name: 'Python Programming', description: 'Python Programming is a high-level, interpreted programming language known for its simplicity and readability. It is widely used in various domains including web development, data analysis, artificial intelligence, and scientific computing.', imageSource: require('./photo2.png') },
  { name: 'Finance Management', description: 'Finance Management involves planning, organizing, directing, and controlling financial activities within an organization. It includes budgeting, investment analysis, financial reporting, and risk management to achieve financial goals.', imageSource: require('./photo3.png') },
  { name: 'Statistics', description: 'Statistics is the study of collecting, analyzing, interpreting, presenting, and organizing data. It is widely used in diverse fields such as business, economics, social sciences, and healthcare for making informed decisions based on data analysis.', imageSource: require('./photo4.png') }
];

const Header = () => {
  return (
    <Text style={styles.header}>LIMKOKWING UNIVERSITY OF CREATIVE AND TECHNOLOGY PROSPECTUS</Text>
  );
};

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      {studentData.map((data, index) => (
        <CourseDetails 
          key={index} 
          name={data.name} 
          description={data.description} 
          imageSource={data.imageSource} 
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'pink',
  },
  header: {
    fontSize: 24,
    fontWeight: 'Normal',
    textAlign: 'center',
    marginBottom: 20,
    
  },
});

export default App;
