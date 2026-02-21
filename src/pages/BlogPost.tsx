import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, Tag, ArrowLeft, User, Share2, Check } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedPage from '../components/AnimatedPage';

interface BlogPostContent {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  image: string;
  tags: string[];
  content: {
    introduction: string;
    sections: {
      heading: string;
      content: string;
      code?: string;
      points?: string[];
    }[];
    conclusion: string;
  };
}

const blogPostsData: BlogPostContent[] = [
  {
    id: 1,
    title: "Building Responsive Mobile Apps with Flutter",
    excerpt: "Learn the best practices for creating responsive Flutter applications that work seamlessly across different screen sizes and devices.",
    date: "2024-06-15",
    readTime: "5 min read",
    category: "Flutter",
    author: "Shristy Jaiswal",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop",
    tags: ["Flutter", "Responsive Design", "Mobile Development"],
    content: {
      introduction: "In today's diverse mobile ecosystem, building apps that look great and function well across all screen sizes is crucial. Flutter provides powerful tools and widgets that make responsive design intuitive and efficient. In this comprehensive guide, we'll explore best practices for creating truly responsive Flutter applications.",
      sections: [
        {
          heading: "Understanding MediaQuery",
          content: "MediaQuery is your first tool for responsive design in Flutter. It provides detailed information about the device's screen size, orientation, and pixel density.",
          code: `import 'package:flutter/material.dart';

class ResponsiveWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;
    final screenHeight = MediaQuery.of(context).size.height;
    
    return Container(
      width: screenWidth * 0.8, // 80% of screen width
      height: screenHeight * 0.3, // 30% of screen height
      child: YourWidget(),
    );
  }
}`,
          points: [
            "Use MediaQuery to get device dimensions",
            "Calculate proportional sizes based on screen size",
            "Handle orientation changes dynamically",
            "Consider safe areas for notched devices"
          ]
        },
        {
          heading: "LayoutBuilder for Adaptive Layouts",
          content: "LayoutBuilder allows you to create widgets that adapt based on parent constraints, making it perfect for building truly responsive interfaces.",
          code: `Widget build(BuildContext context) {
  return LayoutBuilder(
    builder: (context, constraints) {
      if (constraints.maxWidth > 600) {
        return TabletLayout();
      } else {
        return MobileLayout();
      }
    },
  );
}`,
          points: [
            "Create different layouts for different screen sizes",
            "Use breakpoints (600dp for tablets, 1200dp for desktop)",
            "Optimize widget trees for each layout",
            "Test on multiple devices and orientations"
          ]
        },
        {
          heading: "Flexible and Expanded Widgets",
          content: "These widgets help create flexible layouts that adapt to available space without hardcoding dimensions.",
          points: [
            "Use Flexible for widgets that can shrink or grow",
            "Expanded takes all available space in the main axis",
            "Combine with Flex factor to control proportions",
            "Perfect for Row and Column layouts"
          ]
        },
        {
          heading: "AspectRatio for Consistent Proportions",
          content: "Maintain consistent aspect ratios across different screen sizes to ensure your UI elements look proportional.",
          code: `AspectRatio(
  aspectRatio: 16 / 9,
  child: Image.network(imageUrl),
)`,
          points: [
            "Maintain image proportions across devices",
            "Create consistent card layouts",
            "Preserve video player dimensions",
            "Design aesthetically pleasing interfaces"
          ]
        }
      ],
      conclusion: "Building responsive Flutter apps requires understanding of the framework's layout system and using the right tools for each scenario. By combining MediaQuery, LayoutBuilder, and flexible widgets, you can create applications that provide excellent user experiences across all devices. Remember to test extensively on different screen sizes and orientations to ensure your responsive design works flawlessly."
    }
  },
  {
    id: 2,
    title: "State Management in Flutter: A Complete Guide",
    excerpt: "Explore different state management solutions in Flutter, from Provider to Bloc, and learn when to use each approach.",
    date: "2024-06-10",
    readTime: "8 min read",
    category: "Flutter",
    author: "Shristy Jaiswal",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
    tags: ["Flutter", "State Management", "Provider", "Bloc"],
    content: {
      introduction: "State management is one of the most critical aspects of Flutter development. Choosing the right state management solution can significantly impact your app's maintainability, scalability, and performance. This guide explores the most popular state management solutions and helps you decide which one fits your needs.",
      sections: [
        {
          heading: "Understanding State in Flutter",
          content: "Before diving into solutions, it's essential to understand what state is and why it matters. State represents any data that can change over time in your application.",
          points: [
            "Local state: Data needed by a single widget",
            "App state: Data shared across multiple widgets",
            "Ephemeral state: Temporary data like animations",
            "Persistent state: Data that survives app restarts"
          ]
        },
        {
          heading: "setState - The Built-in Approach",
          content: "Flutter's simplest state management method, perfect for local widget state.",
          code: `class CounterWidget extends StatefulWidget {
  @override
  _CounterWidgetState createState() => _CounterWidgetState();
}

class _CounterWidgetState extends State<CounterWidget> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text('Count: $_counter'),
        ElevatedButton(
          onPressed: _incrementCounter,
          child: Text('Increment'),
        ),
      ],
    );
  }
}`,
          points: [
            "Best for simple, local widget state",
            "No additional dependencies required",
            "Can cause performance issues with deep rebuilds",
            "Not suitable for sharing state across widgets"
          ]
        },
        {
          heading: "Provider - The Recommended Solution",
          content: "Provider is Flutter's officially recommended state management solution. It's simple, efficient, and works well for most applications.",
          code: `// Model
class Counter extends ChangeNotifier {
  int _count = 0;
  int get count => _count;

  void increment() {
    _count++;
    notifyListeners();
  }
}

// Provider setup
MultiProvider(
  providers: [
    ChangeNotifierProvider(create: (_) => Counter()),
  ],
  child: MyApp(),
)

// Consumer
Consumer<Counter>(
  builder: (context, counter, child) {
    return Text('Count: \${counter.count}');
  },
)`,
          points: [
            "Easy to learn and implement",
            "Minimal boilerplate code",
            "Good performance with selective rebuilds",
            "Excellent for small to medium apps"
          ]
        },
        {
          heading: "Bloc Pattern - For Complex Apps",
          content: "Business Logic Component (Bloc) separates business logic from UI, making it ideal for large-scale applications.",
          code: `// Event
abstract class CounterEvent {}
class Increment extends CounterEvent {}

// State
class CounterState {
  final int count;
  CounterState(this.count);
}

// Bloc
class CounterBloc extends Bloc<CounterEvent, CounterState> {
  CounterBloc() : super(CounterState(0)) {
    on<Increment>((event, emit) {
      emit(CounterState(state.count + 1));
    });
  }
}`,
          points: [
            "Clear separation of concerns",
            "Testable business logic",
            "Predictable state changes",
            "Steeper learning curve"
          ]
        },
        {
          heading: "Riverpod - The Evolution of Provider",
          content: "Riverpod addresses Provider's limitations with compile-time safety and better testability.",
          points: [
            "No BuildContext dependency",
            "Compile-time safety",
            "Better testing support",
            "More flexible provider composition"
          ]
        },
        {
          heading: "Choosing the Right Solution",
          content: "Select your state management based on app complexity and team expertise.",
          points: [
            "Small apps: setState or Provider",
            "Medium apps: Provider or Riverpod",
            "Large apps: Bloc or Riverpod",
            "Consider team experience and learning curve"
          ]
        }
      ],
      conclusion: "There's no one-size-fits-all solution for state management in Flutter. Start with Provider for most projects, and move to Bloc or Riverpod as your application grows in complexity. The key is understanding your app's requirements and choosing a solution that balances simplicity with scalability."
    }
  },
  {
    id: 3,
    title: "React Best Practices for Modern Web Development",
    excerpt: "Discover the latest React patterns and best practices that will make your web applications more maintainable and performant.",
    date: "2024-06-05",
    readTime: "6 min read",
    category: "React",
    author: "Shristy Jaiswal",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    tags: ["React", "JavaScript", "Web Development"],
    content: {
      introduction: "React has evolved significantly over the years, introducing powerful features like Hooks and Concurrent Mode. Following modern best practices ensures your React applications are maintainable, performant, and future-proof. Let's explore the essential patterns every React developer should know.",
      sections: [
        {
          heading: "Embrace Functional Components and Hooks",
          content: "Functional components with Hooks are now the standard in React development, offering cleaner code and better reusability.",
          code: `import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(\`/api/users/\${userId}\`);
      const data = await response.json();
      setUser(data);
      setLoading(false);
    }
    fetchUser();
  }, [userId]);

  if (loading) return <Loading />;
  return <div>{user.name}</div>;
}`,
          points: [
            "Use functional components as default",
            "Leverage built-in hooks (useState, useEffect, useContext)",
            "Create custom hooks for reusable logic",
            "Class components only for legacy code"
          ]
        },
        {
          heading: "Component Composition Over Inheritance",
          content: "React favors composition over inheritance. Build complex UIs by combining simple components.",
          code: `// Good: Composition
function Card({ children, header, footer }) {
  return (
    <div className="card">
      {header && <CardHeader>{header}</CardHeader>}
      <CardBody>{children}</CardBody>
      {footer && <CardFooter>{footer}</CardFooter>}
    </div>
  );
}

// Usage
<Card 
  header={<h2>Title</h2>}
  footer={<Button>Action</Button>}
>
  <p>Content goes here</p>
</Card>`,
          points: [
            "Break down complex UIs into smaller components",
            "Use children prop for flexible composition",
            "Create layout components for consistent structure",
            "Avoid deep component hierarchies"
          ]
        },
        {
          heading: "Optimize Performance with Memoization",
          content: "Use React.memo, useMemo, and useCallback to prevent unnecessary re-renders and expensive calculations.",
          code: `import { memo, useMemo, useCallback } from 'react';

const ExpensiveComponent = memo(({ data, onItemClick }) => {
  const processedData = useMemo(() => {
    return data.map(item => expensiveOperation(item));
  }, [data]);

  const handleClick = useCallback((id) => {
    onItemClick(id);
  }, [onItemClick]);

  return processedData.map(item => (
    <Item key={item.id} onClick={() => handleClick(item.id)} />
  ));
});`,
          points: [
            "Use React.memo for expensive components",
            "useMemo for expensive calculations",
            "useCallback for stable callback references",
            "Don't over-optimize - measure first"
          ]
        },
        {
          heading: "Proper Error Handling",
          content: "Implement Error Boundaries and proper error handling to create robust applications.",
          code: `class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} />;
    }
    return this.props.children;
  }
}`,
          points: [
            "Wrap components with Error Boundaries",
            "Show user-friendly error messages",
            "Log errors to monitoring services",
            "Provide recovery options when possible"
          ]
        },
        {
          heading: "Type Safety with TypeScript",
          content: "TypeScript adds type safety to React, catching errors at compile time and improving developer experience.",
          code: `interface UserProps {
  user: {
    id: number;
    name: string;
    email: string;
  };
  onUpdate: (user: User) => void;
}

const UserCard: React.FC<UserProps> = ({ user, onUpdate }) => {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
};`,
          points: [
            "Define prop types with interfaces",
            "Use TypeScript for better IDE support",
            "Catch errors before runtime",
            "Improve code documentation"
          ]
        }
      ],
      conclusion: "Modern React development is about writing clean, maintainable code that performs well. By following these best practices - using functional components, proper composition, optimization techniques, and TypeScript - you'll create React applications that are both powerful and maintainable. Remember, best practices evolve, so stay updated with the React community."
    }
  },
  {
    id: 4,
    title: "REST API Integration in Mobile Apps",
    excerpt: "Learn how to efficiently integrate REST APIs in your mobile applications with proper error handling and caching strategies.",
    date: "2024-05-28",
    readTime: "7 min read",
    category: "API",
    author: "Shristy Jaiswal",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    tags: ["REST API", "Mobile", "Backend Integration"],
    content: {
      introduction: "Integrating REST APIs is a fundamental aspect of modern mobile app development. Whether you're fetching user data, posting updates, or syncing with a backend, doing it efficiently and reliably is crucial for a great user experience. This guide covers everything from basic HTTP requests to advanced caching strategies.",
      sections: [
        {
          heading: "Understanding REST API Basics",
          content: "REST (Representational State Transfer) is an architectural style for designing networked applications. It uses standard HTTP methods and is stateless.",
          points: [
            "GET: Retrieve data from server",
            "POST: Create new resources",
            "PUT/PATCH: Update existing resources",
            "DELETE: Remove resources",
            "Use proper status codes (200, 201, 400, 404, 500)"
          ]
        },
        {
          heading: "Making HTTP Requests in Flutter",
          content: "Flutter provides the http package for making network requests. For more complex scenarios, dio is a popular alternative.",
          code: `import 'package:http/http.dart' as http;
import 'dart:convert';

class ApiService {
  static const String baseUrl = 'https://api.example.com';

  Future<User> fetchUser(int userId) async {
    final response = await http.get(
      Uri.parse('\$baseUrl/users/\$userId'),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer \$token',
      },
    );

    if (response.statusCode == 200) {
      return User.fromJson(jsonDecode(response.body));
    } else {
      throw Exception('Failed to load user');
    }
  }

  Future<User> createUser(User user) async {
    final response = await http.post(
      Uri.parse('\$baseUrl/users'),
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode(user.toJson()),
    );

    if (response.statusCode == 201) {
      return User.fromJson(jsonDecode(response.body));
    } else {
      throw Exception('Failed to create user');
    }
  }
}`,
          points: [
            "Use async/await for cleaner async code",
            "Always include proper headers",
            "Parse JSON responses into model classes",
            "Handle different status codes appropriately"
          ]
        },
        {
          heading: "Robust Error Handling",
          content: "Network requests can fail for many reasons. Implement comprehensive error handling to provide a good user experience.",
          code: `class ApiException implements Exception {
  final String message;
  final int? statusCode;
  
  ApiException(this.message, [this.statusCode]);
}

Future<T> makeRequest<T>(Future<http.Response> Function() request) async {
  try {
    final response = await request();
    
    if (response.statusCode >= 200 && response.statusCode < 300) {
      return parseResponse<T>(response.body);
    } else if (response.statusCode == 401) {
      throw ApiException('Unauthorized', 401);
    } else if (response.statusCode == 404) {
      throw ApiException('Resource not found', 404);
    } else {
      throw ApiException('Server error', response.statusCode);
    }
  } on SocketException {
    throw ApiException('No internet connection');
  } on TimeoutException {
    throw ApiException('Request timeout');
  } catch (e) {
    throw ApiException('Unknown error: \$e');
  }
}`,
          points: [
            "Catch network errors (no connection, timeout)",
            "Handle HTTP errors (4xx, 5xx)",
            "Show user-friendly error messages",
            "Implement retry logic for transient failures"
          ]
        },
        {
          heading: "Implementing Caching Strategies",
          content: "Caching improves performance and reduces API calls, saving bandwidth and providing offline functionality.",
          code: `class CachedApiService {
  final ApiService _apiService;
  final Map<String, CacheEntry> _cache = {};
  final Duration cacheTimeout = Duration(minutes: 5);

  Future<User> getUser(int userId) async {
    final cacheKey = 'user_\$userId';
    final cached = _cache[cacheKey];

    if (cached != null && !cached.isExpired) {
      return cached.data as User;
    }

    final user = await _apiService.fetchUser(userId);
    _cache[cacheKey] = CacheEntry(user, DateTime.now());
    return user;
  }
}

class CacheEntry {
  final dynamic data;
  final DateTime timestamp;

  CacheEntry(this.data, this.timestamp);

  bool get isExpired {
    return DateTime.now().difference(timestamp) > Duration(minutes: 5);
  }
}`,
          points: [
            "Cache GET requests with expiration times",
            "Use local storage for persistent caching",
            "Implement cache invalidation strategies",
            "Consider memory vs. disk caching"
          ]
        },
        {
          heading: "Authentication and Security",
          content: "Secure your API requests with proper authentication and protect sensitive data.",
          code: `class SecureApiService {
  String? _authToken;

  Future<void> login(String email, String password) async {
    final response = await http.post(
      Uri.parse('\$baseUrl/auth/login'),
      body: jsonEncode({'email': email, 'password': password}),
    );

    if (response.statusCode == 200) {
      _authToken = jsonDecode(response.body)['token'];
      await _secureStorage.write(key: 'auth_token', value: _authToken);
    }
  }

  Future<http.Response> authenticatedRequest(String endpoint) async {
    _authToken ??= await _secureStorage.read(key: 'auth_token');
    
    return http.get(
      Uri.parse('\$baseUrl/\$endpoint'),
      headers: {
        'Authorization': 'Bearer \$_authToken',
      },
    );
  }
}`,
          points: [
            "Use secure storage for tokens",
            "Implement token refresh mechanisms",
            "Never store passwords or tokens in plain text",
            "Use HTTPS for all API communication"
          ]
        }
      ],
      conclusion: "Effective REST API integration requires understanding HTTP fundamentals, implementing robust error handling, and optimizing with caching strategies. By following these practices, you'll create mobile apps that communicate reliably with backend services, handle errors gracefully, and provide excellent user experiences even in challenging network conditions."
    }
  },
  {
    id: 5,
    title: "UI/UX Design Principles for Mobile Apps",
    excerpt: "Essential design principles every mobile app developer should know to create intuitive and engaging user experiences.",
    date: "2024-05-20",
    readTime: "4 min read",
    category: "Design",
    author: "Shristy Jaiswal",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=400&fit=crop",
    tags: ["UI/UX", "Design", "User Experience"],
    content: {
      introduction: "Great mobile app design goes beyond aesthetics—it's about creating intuitive, efficient, and delightful user experiences. Whether you're a developer who designs or collaborates with designers, understanding core UI/UX principles will help you build better apps that users love.",
      sections: [
        {
          heading: "Keep It Simple and Focused",
          content: "Simplicity is the ultimate sophistication. Every screen should have a clear purpose and guide users toward their goals without distractions.",
          points: [
            "One primary action per screen",
            "Remove unnecessary UI elements",
            "Use white space effectively",
            "Prioritize content over decoration",
            "Progressive disclosure - show what's needed when it's needed"
          ]
        },
        {
          heading: "Establish Clear Visual Hierarchy",
          content: "Visual hierarchy guides users' attention to the most important elements first, making interfaces intuitive and easy to navigate.",
          points: [
            "Size: Larger elements attract more attention",
            "Color: Use accent colors for important actions",
            "Contrast: Make interactive elements stand out",
            "Typography: Use different font sizes and weights",
            "Position: Place important items in natural scanning patterns"
          ]
        },
        {
          heading: "Ensure Consistent Design",
          content: "Consistency reduces cognitive load and makes apps predictable and easier to learn.",
          points: [
            "Use consistent button styles and placements",
            "Maintain uniform spacing throughout",
            "Apply consistent color schemes",
            "Use the same iconography style",
            "Follow platform design guidelines (Material/iOS)"
          ]
        },
        {
          heading: "Design for Touch",
          content: "Mobile interfaces are touch-based. Design elements must be easily tappable and provide clear feedback.",
          points: [
            "Minimum touch target: 44x44 pixels",
            "Add spacing between interactive elements",
            "Provide visual feedback on touch (press states)",
            "Place frequently used actions within thumb reach",
            "Consider one-handed usage patterns"
          ]
        },
        {
          heading: "Optimize Navigation",
          content: "Users should always know where they are and how to get where they want to go.",
          points: [
            "Use clear, descriptive labels",
            "Limit navigation to 5-7 main sections",
            "Show current location in navigation",
            "Provide breadcrumbs for deep hierarchies",
            "Make back navigation obvious and consistent"
          ]
        },
        {
          heading: "Provide Immediate Feedback",
          content: "Users should always know what's happening in your app. Never leave them wondering if their action worked.",
          points: [
            "Show loading states for async operations",
            "Use animations to indicate actions",
            "Display success/error messages clearly",
            "Disable buttons during processing",
            "Use micro-interactions for delight"
          ]
        },
        {
          heading: "Design Accessible Experiences",
          content: "Accessible design benefits everyone, not just users with disabilities.",
          points: [
            "Maintain 4.5:1 contrast ratio for text",
            "Support dynamic text sizing",
            "Provide alternative text for images",
            "Ensure color isn't the only differentiator",
            "Support screen readers and voice control"
          ]
        },
        {
          heading: "Optimize for Performance",
          content: "Design decisions impact performance. Fast apps feel better to use.",
          points: [
            "Optimize images for mobile displays",
            "Use lazy loading for content",
            "Minimize animations for low-end devices",
            "Show content progressively as it loads",
            "Cache frequently accessed data"
          ]
        },
        {
          heading: "Handle Errors Gracefully",
          content: "Errors are inevitable. Turn frustrating moments into helpful experiences.",
          points: [
            "Use friendly, human language",
            "Explain what went wrong and why",
            "Provide clear next steps",
            "Don't blame the user",
            "Offer alternatives when possible"
          ]
        },
        {
          heading: "Design for Empty States",
          content: "First-time users see empty screens. Make them inviting and guide users to take action.",
          points: [
            "Explain what the screen is for",
            "Show how to populate it with content",
            "Use illustrations to make it friendly",
            "Include a clear call-to-action",
            "Consider onboarding flows"
          ]
        }
      ],
      conclusion: "Great mobile UI/UX design is about empathy - understanding users' needs, contexts, and constraints. By following these principles - simplicity, consistency, accessibility, and thoughtful feedback - you'll create mobile apps that are not just functional, but delightful to use. Remember, good design is iterative; always test with real users and refine based on feedback."
    }
  },
  {
    id: 6,
    title: "Firebase Integration for Flutter Apps",
    excerpt: "Complete guide to integrating Firebase services like Authentication, Firestore, and Cloud Messaging in your Flutter applications.",
    date: "2024-05-15",
    readTime: "10 min read",
    category: "Firebase",
    author: "Shristy Jaiswal",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    tags: ["Firebase", "Flutter", "Backend"],
    content: {
      introduction: "Firebase provides a comprehensive suite of backend services that can supercharge your Flutter app development. From authentication to real-time databases and push notifications, Firebase handles the complex backend infrastructure so you can focus on building great apps. This guide walks through integrating Firebase's most popular services.",
      sections: [
        {
          heading: "Setting Up Firebase",
          content: "First, set up Firebase in your Flutter project. This involves creating a Firebase project and adding configuration files.",
          code: `# Install FlutterFire CLI
dart pub global activate flutterfire_cli

# Configure Firebase for your Flutter app
flutterfire configure

# Add dependencies to pubspec.yaml
dependencies:
  firebase_core: ^2.24.0
  firebase_auth: ^4.15.0
  cloud_firestore: ^4.13.0
  firebase_messaging: ^14.7.0`,
          points: [
            "Create a Firebase project in Firebase Console",
            "Add your app (iOS and Android)",
            "Download configuration files",
            "Initialize Firebase in your app",
            "Add platform-specific setup"
          ]
        },
        {
          heading: "Firebase Authentication",
          content: "Implement secure user authentication with multiple sign-in methods including email/password, Google, and more.",
          code: `import 'package:firebase_auth/firebase_auth.dart';

class AuthService {
  final FirebaseAuth _auth = FirebaseAuth.instance;

  // Email & Password Sign Up
  Future<UserCredential?> signUpWithEmail(
    String email, 
    String password
  ) async {
    try {
      return await _auth.createUserWithEmailAndPassword(
        email: email,
        password: password,
      );
    } on FirebaseAuthException catch (e) {
      if (e.code == 'weak-password') {
        throw 'Password is too weak';
      } else if (e.code == 'email-already-in-use') {
        throw 'Email already exists';
      }
      throw e.message ?? 'Authentication failed';
    }
  }

  // Sign In
  Future<UserCredential?> signInWithEmail(
    String email, 
    String password
  ) async {
    try {
      return await _auth.signInWithEmailAndPassword(
        email: email,
        password: password,
      );
    } catch (e) {
      throw 'Invalid credentials';
    }
  }

  // Sign Out
  Future<void> signOut() async {
    await _auth.signOut();
  }

  // Auth State Stream
  Stream<User?> get authStateChanges => _auth.authStateChanges();
}`,
          points: [
            "Multiple authentication methods available",
            "Handle authentication errors gracefully",
            "Listen to auth state changes",
            "Implement password reset functionality",
            "Secure sensitive operations"
          ]
        },
        {
          heading: "Cloud Firestore Database",
          content: "Use Firestore for real-time, scalable NoSQL database with automatic syncing across devices.",
          code: `import 'package:cloud_firestore/cloud_firestore.dart';

class FirestoreService {
  final FirebaseFirestore _db = FirebaseFirestore.instance;

  // Create
  Future<void> createUser(String userId, Map<String, dynamic> data) async {
    await _db.collection('users').doc(userId).set(data);
  }

  // Read
  Future<DocumentSnapshot> getUser(String userId) async {
    return await _db.collection('users').doc(userId).get();
  }

  // Update
  Future<void> updateUser(String userId, Map<String, dynamic> data) async {
    await _db.collection('users').doc(userId).update(data);
  }

  // Delete
  Future<void> deleteUser(String userId) async {
    await _db.collection('users').doc(userId).delete();
  }

  // Real-time Stream
  Stream<DocumentSnapshot> userStream(String userId) {
    return _db.collection('users').doc(userId).snapshots();
  }

  // Query
  Future<QuerySnapshot> getActiveUsers() async {
    return await _db
        .collection('users')
        .where('active', isEqualTo: true)
        .orderBy('createdAt', descending: true)
        .limit(10)
        .get();
  }
}`,
          points: [
            "Structure data in collections and documents",
            "Use real-time listeners for live updates",
            "Implement complex queries with where, orderBy",
            "Handle offline persistence automatically",
            "Optimize queries with indexes"
          ]
        },
        {
          heading: "Firebase Cloud Messaging (FCM)",
          content: "Send push notifications to keep users engaged with your app.",
          code: `import 'package:firebase_messaging/firebase_messaging.dart';

class FCMService {
  final FirebaseMessaging _messaging = FirebaseMessaging.instance;

  Future<void> initialize() async {
    // Request permission
    NotificationSettings settings = await _messaging.requestPermission(
      alert: true,
      badge: true,
      sound: true,
    );

    if (settings.authorizationStatus == AuthorizationStatus.authorized) {
      print('User granted permission');
      
      // Get FCM token
      String? token = await _messaging.getToken();
      print('FCM Token: \$token');
      
      // Save token to Firestore for targeting
      await saveTokenToDatabase(token);
    }

    // Handle foreground messages
    FirebaseMessaging.onMessage.listen((RemoteMessage message) {
      print('Received message: \${message.notification?.title}');
      showLocalNotification(message);
    });

    // Handle background messages
    FirebaseMessaging.onBackgroundMessage(_backgroundHandler);
  }

  // Background message handler
  static Future<void> _backgroundHandler(RemoteMessage message) async {
    print('Background message: \${message.notification?.title}');
  }

  Future<void> subscribeToTopic(String topic) async {
    await _messaging.subscribeToTopic(topic);
  }
}`,
          points: [
            "Request notification permissions",
            "Handle foreground and background messages",
            "Use topics for targeted messaging",
            "Store FCM tokens for specific user targeting",
            "Handle notification taps and navigation"
          ]
        },
        {
          heading: "Firebase Storage",
          content: "Store and serve user-generated content like images and videos.",
          code: `import 'package:firebase_storage/firebase_storage.dart';
import 'dart:io';

class StorageService {
  final FirebaseStorage _storage = FirebaseStorage.instance;

  Future<String> uploadImage(File file, String userId) async {
    try {
      String fileName = '\$userId/\${DateTime.now().millisecondsSinceEpoch}.jpg';
      Reference ref = _storage.ref().child('profile_images/\$fileName');
      
      UploadTask uploadTask = ref.putFile(file);
      
      // Monitor upload progress
      uploadTask.snapshotEvents.listen((TaskSnapshot snapshot) {
        double progress = snapshot.bytesTransferred / snapshot.totalBytes;
        print('Upload progress: \${(progress * 100).toStringAsFixed(2)}%');
      });
      
      TaskSnapshot snapshot = await uploadTask;
      String downloadUrl = await snapshot.ref.getDownloadURL();
      
      return downloadUrl;
    } catch (e) {
      throw 'Upload failed: \$e';
    }
  }

  Future<void> deleteImage(String imageUrl) async {
    try {
      Reference ref = _storage.refFromURL(imageUrl);
      await ref.delete();
    } catch (e) {
      throw 'Delete failed: \$e';
    }
  }
}`,
          points: [
            "Upload files with progress tracking",
            "Organize files in folders",
            "Set security rules for access control",
            "Generate download URLs",
            "Implement file size limits"
          ]
        },
        {
          heading: "Security Rules",
          content: "Protect your data with Firebase Security Rules.",
          code: `// Firestore Security Rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only read/write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null 
                        && request.auth.uid == userId;
    }
    
    // Public read, authenticated write
    match /posts/{postId} {
      allow read: if true;
      allow create: if request.auth != null;
      allow update, delete: if request.auth != null 
                            && request.auth.uid == resource.data.authorId;
    }
  }
}

// Storage Security Rules
service firebase.storage {
  match /b/{bucket}/o {
    match /profile_images/{userId}/{fileName} {
      allow read: if true;
      allow write: if request.auth != null 
                   && request.auth.uid == userId;
    }
  }
}`,
          points: [
            "Default to deny all access",
            "Validate authentication before allowing operations",
            "Check data ownership",
            "Validate data structure and content",
            "Test rules thoroughly"
          ]
        }
      ],
      conclusion: "Firebase provides a powerful, scalable backend solution for Flutter apps without the complexity of managing servers. By integrating Authentication, Firestore, Cloud Messaging, and Storage, you can build feature-rich apps with real-time capabilities. Remember to implement proper security rules and error handling for production apps. Start with Firebase's generous free tier and scale as your app grows."
    }
  },
  {
    id: 7,
    title: "Optimizing Flutter App Performance",
    excerpt: "Deep dive into Flutter performance optimization techniques.",
    date: "2024-05-10",
    readTime: "9 min read",
    category: "Flutter",
    author: "Shristy Jaiswal",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=400&fit=crop",
    tags: ["Flutter", "Performance", "Optimization"],
    content: {
      introduction: "Performance is crucial for user satisfaction. A slow, janky app will frustrate users and lead to poor reviews. Flutter is designed for high performance with its rendering engine, but you still need to follow best practices to achieve that buttery-smooth 60fps experience. This guide covers everything from identifying bottlenecks to implementing optimizations.",
      sections: [
        {
          heading: "Understanding Flutter's Rendering",
          content: "Flutter renders at 60fps (or 120fps on capable devices) by rebuilding the widget tree efficiently. Understanding this process is key to optimization.",
          points: [
            "Flutter uses a declarative UI framework",
            "Widget trees are rebuilt on state changes",
            "Render objects are more expensive to rebuild",
            "Flutter's architecture: Framework → Engine → Embedder",
            "The build phase should be fast and side-effect free"
          ]
        },
        {
          heading: "Minimizing Widget Rebuilds",
          content: "Unnecessary widget rebuilds are the most common performance issue. Use const constructors and split widgets strategically.",
          code: `// Bad: Entire widget rebuilds on counter change
class MyWidget extends StatefulWidget {
  @override
  _MyWidgetState createState() => _MyWidgetState();
}

class _MyWidgetState extends State<MyWidget> {
  int _counter = 0;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        ExpensiveWidget(), // Rebuilds unnecessarily
        Text('\$_counter'),
        ElevatedButton(
          onPressed: () => setState(() => _counter++),
          child: Text('Increment'),
        ),
      ],
    );
  }
}

// Good: Use const and separate stateful widgets
class MyWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        const ExpensiveWidget(), // Won't rebuild
        CounterWidget(),
      ],
    );
  }
}`,
          points: [
            "Use const constructors wherever possible",
            "Split large widgets into smaller ones",
            "Move setState calls to the smallest widget",
            "Use keys to preserve widget state",
            "Avoid creating widgets in build methods"
          ]
        },
        {
          heading: "Use DevTools for Profiling",
          content: "Flutter DevTools provides powerful performance profiling capabilities. Always measure before optimizing.",
          points: [
            "Performance overlay shows FPS and frame timing",
            "Timeline view identifies expensive operations",
            "Widget inspector shows rebuild counts",
            "Memory view tracks allocations and leaks",
            "Enable profile mode for accurate measurements"
          ]
        },
        {
          heading: "Optimize List Performance",
          content: "Lists are common in mobile apps and can cause performance issues if not implemented correctly.",
          code: `// Bad: Builds all items at once
ListView(
  children: items.map((item) => ItemWidget(item)).toList(),
)

// Good: Lazy loading with builder
ListView.builder(
  itemCount: items.length,
  itemBuilder: (context, index) {
    return ItemWidget(items[index]);
  },
)

// Better: Add item extent for better performance
ListView.builder(
  itemCount: items.length,
  itemExtent: 80.0, // Fixed height
  itemBuilder: (context, index) {
    return ItemWidget(items[index]);
  },
)

// Complex lists: Use different item types efficiently
ListView.builder(
  itemCount: items.length,
  itemBuilder: (context, index) {
    final item = items[index];
    return switch (item.type) {
      ItemType.image => ImageItem(item),
      ItemType.text => TextItem(item),
      ItemType.video => VideoItem(item),
    };
  },
)`,
          points: [
            "Always use ListView.builder for long lists",
            "Provide itemExtent when items have fixed height",
            "Use RepaintBoundary for complex list items",
            "Implement pagination for very long lists",
            "Cache expensive computations"
          ]
        },
        {
          heading: "Image Optimization",
          content: "Images are often the biggest performance bottleneck. Optimize them properly.",
          code: `// Use cached_network_image for network images
CachedNetworkImage(
  imageUrl: imageUrl,
  placeholder: (context, url) => CircularProgressIndicator(),
  errorWidget: (context, url, error) => Icon(Icons.error),
  memCacheWidth: 400, // Resize in memory
  maxHeightDiskCache: 800,
)

// For local images, specify dimensions
Image.asset(
  'assets/image.jpg',
  width: 200,
  height: 200,
  cacheWidth: 200 * MediaQuery.of(context).devicePixelRatio.round(),
)

// Precache important images
@override
void didChangeDependencies() {
  super.didChangeDependencies();
  precacheImage(AssetImage('assets/logo.png'), context);
}`,
          points: [
            "Use appropriate image sizes (don't load 4K for thumbnails)",
            "Implement image caching",
            "Specify image dimensions",
            "Use WebP format for better compression",
            "Lazy load images outside viewport"
          ]
        },
        {
          heading: "Reduce Overdraw and Opacity",
          content: "Minimize overdraw and avoid unnecessary opacity layers.",
          code: `// Bad: Multiple overlapping containers
Stack(
  children: [
    Container(color: Colors.red),
    Container(color: Colors.blue.withOpacity(0.5)),
    Opacity(opacity: 0.8, child: Widget()),
  ],
)

// Good: Use transparent colors directly
Stack(
  children: [
    Container(color: Color.fromRGBO(0, 0, 255, 0.5)),
    Widget(),
  ],
)`,
          points: [
            "Enable 'Debug Paint' to visualize overdraw'",
            "Use Colors.transparent instead of Opacity when possible",
            "Avoid nested Opacity widgets",
            "Use ClipRect sparingly (expensive)",
            "Minimize transparency layers"
          ]
        },
        {
          heading: "Async Operations Best Practices",
          content: "Handle async operations efficiently to keep the UI responsive.",
          code: `// Use isolates for heavy computation
Future<List<Data>> processDataInBackground(String input) async {
  return await compute(processData, input);
}

// Heavy processing function
List<Data> processData(String input) {
  // Complex calculations
  return results;
}

// Debounce rapid state changes
Timer? _debounce;
void onSearchChanged(String query) {
  _debounce?.cancel();
  _debounce = Timer(Duration(milliseconds: 500), () {
    performSearch(query);
  });
}`,
          points: [
            "Use isolates for CPU-intensive tasks",
            "Implement debouncing for rapid events",
            "Show loading indicators for long operations",
            "Cache results of expensive operations",
            "Use FutureBuilder and StreamBuilder appropriately"
          ]
        },
        {
          heading: "App Size Optimization",
          content: "Smaller app sizes lead to faster downloads and better user retention.",
          points: [
            "Use vector graphics (SVG) instead of rasters when possible",
            "Remove unused resources and packages",
            "Enable code shrinking and obfuscation",
            "Split APKs by ABI for Android",
            "Compress assets properly"
          ]
        }
      ],
      conclusion: "Flutter performance optimization is about making informed decisions based on measurements, not assumptions. Use DevTools to identify bottlenecks, minimize widget rebuilds, optimize lists and images, and handle async operations properly. Remember that premature optimization can make code harder to maintain—profile first, then optimize where it matters most."
    }
  },
  {
    id: 8,
    title: "Cross-Platform Development: Flutter vs React Native",
    excerpt: "A comprehensive comparison between Flutter and React Native.",
    date: "2024-05-05",
    readTime: "12 min read",
    category: "Mobile",
    author: "Shristy Jaiswal",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
    tags: ["Flutter", "React Native", "Cross-Platform"],
    content: {
      introduction: "Choosing between Flutter and React Native is one of the most important decisions for cross-platform mobile development. Both frameworks allow you to build apps for iOS and Android with a single codebase, but they take different approaches. This comprehensive comparison will help you make an informed decision based on your project needs, team expertise, and long-term goals.",
      sections: [
        {
          heading: "Architecture and Philosophy",
          content: "Understanding the fundamental architecture differences helps explain performance and developer experience trade-offs.",
          points: [
            "Flutter: Uses Skia graphics engine, renders its own widgets",
            "React Native: Uses native components via bridge",
            "Flutter: Everything is a widget (declarative UI)",
            "React Native: Uses React paradigm with JSX",
            "Flutter: Dart language, compiled to native code",
            "React Native: JavaScript, interpreted at runtime"
          ]
        },
        {
          heading: "Performance Comparison",
          content: "Performance characteristics differ significantly between the two frameworks.",
          points: [
            "Flutter: Generally faster, 60fps out of the box",
            "React Native: Good but can struggle with complex animations",
            "Flutter: No JavaScript bridge overhead",
            "React Native: Bridge can be bottleneck for heavy operations",
            "Flutter: Consistent performance across platforms",
            "React Native: Performance varies by platform",
            "Both support hot reload for fast development"
          ]
        },
        {
          heading: "UI and Widgets",
          content: "The approach to UI development and available components differs substantially.",
          code: `// Flutter
Container(
  padding: EdgeInsets.all(16),
  child: Column(
    children: [
      Text('Hello Flutter'),
      ElevatedButton(
        onPressed: () {},
        child: Text('Click Me'),
      ),
    ],
  ),
)

// React Native
<View style={{padding: 16}}>
  <Text>Hello React Native</Text>
  <TouchableOpacity onPress={() => {}}>
    <Text>Click Me</Text>
  </TouchableOpacity>
</View>`,
          points: [
            "Flutter: Rich set of Material and Cupertino widgets",
            "React Native: Uses native platform components",
            "Flutter: Consistent UI across platforms",
            "React Native: Platform-specific look and feel",
            "Flutter: More customizable animations",
            "React Native: Easier to achieve native feel"
          ]
        },
        {
          heading: "Developer Experience",
          content: "The day-to-day development experience varies in important ways.",
          points: [
            "Flutter: Learning Dart (less common but clean)",
            "React Native: Leverage existing JavaScript/React skills",
            "Flutter: Excellent documentation and examples",
            "React Native: Huge community and resources",
            "Flutter: Flutter DevTools for debugging",
            "React Native: Can use Chrome DevTools",
            "Both: Hot reload speeds up development"
          ]
        },
        {
          heading: "Package Ecosystem",
          content: "Third-party packages and community support are crucial for productivity.",
          points: [
            "Flutter: pub.dev with 40,000+ packages",
            "React Native: npm with millions of packages",
            "Flutter: Quality packages from Google and community",
            "React Native: More packages but quality varies",
            "Flutter: Easier to write platform-specific code",
            "React Native: More mature native module ecosystem"
          ]
        },
        {
          heading: "Platform Integration",
          content: "Both frameworks handle platform-specific features differently.",
          code: `// Flutter Platform Channels
static const platform = MethodChannel('com.example.app/battery');

Future<int> getBatteryLevel() async {
  try {
    final int result = await platform.invokeMethod('getBatteryLevel');
    return result;
  } catch (e) {
    print("Failed to get battery level: '\$e'.");
    return -1;
  }
}

// React Native Native Modules
import { NativeModules } from 'react-native';

const { BatteryModule } = NativeModules;

async function getBatteryLevel() {
  try {
    const level = await BatteryModule.getBatteryLevel();
    return level;
  } catch (e) {
    console.error('Failed to get battery level:', e);
    return -1;
  }
}`,
          points: [
            "Flutter: Platform channels for native features",
            "React Native: Native modules and Turbo Modules",
            "Flutter: Method channels and event channels",
            "React Native: JavaScript bridge (improving with JSI)",
            "Both require native code knowledge for custom features",
            "Flutter: Easier to maintain platform-specific code"
          ]
        },
        {
          heading: "Code Sharing and Maintenance",
          content: "Consider long-term maintenance and code reuse across platforms.",
          points: [
            "Flutter: High code reuse (80-90%)",
            "React Native: Good code reuse (70-80%)",
            "Flutter: Can target web and desktop (in stable)",
            "React Native: Primarily mobile (web support exists)",
            "Flutter: Single codebase truly looks same everywhere",
            "React Native: May need platform-specific adjustments",
            "Both: Easier to maintain than separate native apps"
          ]
        },
        {
          heading: "Testing Capabilities",
          content: "Testing is crucial for production apps. Both frameworks offer robust testing solutions.",
          points: [
            "Flutter: Excellent widget testing built-in",
            "React Native: Use Jest and React Native Testing Library",
            "Flutter: Integration testing with flutter_driver",
            "React Native: Detox for E2E testing",
            "Flutter: Golden tests for pixel-perfect UI",
            "React Native: Snapshot testing with Jest",
            "Both support unit testing well"
          ]
        },
        {
          heading: "Adoption and Community",
          content: "Consider the ecosystem maturity and community support.",
          points: [
            "Flutter: Growing rapidly, backed by Google",
            "React Native: Mature, backed by Meta/Facebook",
            "Flutter: Used by Google, Alibaba, BMW",
            "React Native: Used by Facebook, Instagram, Discord",
            "Flutter: Newer but very active community",
            "React Native: Established community and resources",
            "Both have strong corporate backing"
          ]
        },
        {
          heading: "When to Choose Flutter",
          content: "Flutter excels in specific scenarios and use cases.",
          points: [
            "Need pixel-perfect UI across platforms",
            "Performance is critical (games, complex animations)",
            "Want single codebase for mobile, web, desktop",
            "Team can learn Dart",
            "Prefer declarative UI approach",
            "Need extensive custom UI components"
          ]
        },
        {
          heading: "When to Choose React Native",
          content: "React Native is ideal for certain project requirements.",
          points: [
            "Team already knows React/JavaScript",
            "Want platform-specific native feel",
            "Need extensive use of NPM packages",
            "Integrating with existing React web app",
            "Shorter learning curve for web developers",
            "Need mature third-party ecosystem"
          ]
        }
      ],
      conclusion: "Both Flutter and React Native are excellent choices for cross-platform development. Flutter offers better performance, consistency, and is ideal for custom UIs and animations. React Native provides easier JavaScript integration, a larger package ecosystem, and platform-specific feel. Your choice should depend on your team's skills, project requirements, and long-term goals. Many successful apps have been built with both frameworks—the 'best' choice varies by context."
    }
  },
  {
    id: 9,
    title: "Building Accessible Web Applications",
    excerpt: "Learn how to build web applications that are accessible to all users.",
    date: "2024-04-28",
    readTime: "7 min read",
    category: "Web",
    author: "Shristy Jaiswal",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
    tags: ["Accessibility", "Web", "WCAG"],
    content: {
      introduction: "Web accessibility isn't just a nice-to-have—it's a legal requirement in many jurisdictions and, more importantly, the right thing to do. Accessible websites serve everyone better, not just users with disabilities. This guide covers practical techniques for building accessible web applications following WCAG 2.1 guidelines.",
      sections: [
        {
          heading: "Understanding Web Accessibility",
          content: "Accessibility ensures that websites are usable by people with diverse abilities and disabilities.",
          points: [
            "Visual: Blindness, low vision, color blindness",
            "Auditory: Deafness or hearing impairments",
            "Motor: Difficulty using mouse, rely on keyboard",
            "Cognitive: Learning disabilities, memory issues",
            "Benefits everyone: mobile users, older users, temporary injuries"
          ]
        },
        {
          heading: "Semantic HTML Structure",
          content: "Use proper HTML elements to convey meaning and structure.",
          code: `<!-- Bad: Divs for everything -->
<div class="header">
  <div class="nav">
    <div onclick="navigate()">Home</div>
  </div>
</div>

<!-- Good: Semantic HTML -->
<header>
  <nav>
    <a href="/">Home</a>
  </nav>
</header>

<main>
  <article>
    <h1>Article Title</h1>
    <p>Content...</p>
  </article>
</main>

<footer>
  <p>&copy; 2024 Company</p>
</footer>`,
          points: [
            "Use <header>, <nav>, <main>, <footer>, <article>",
            "Proper heading hierarchy (h1 → h2 → h3)",
            "Use <button> for actions, <a> for navigation",
            "Lists with <ul>, <ol>, and <li>",
            "Tables with proper <th> and <caption>"
          ]
        },
        {
          heading: "ARIA Attributes",
          content: "ARIA (Accessible Rich Internet Applications) enhances accessibility when semantic HTML isn't enough.",
          code: `<!-- Accessible modal dialog -->
<div 
  role="dialog" 
  aria-labelledby="dialog-title"
  aria-modal="true"
>
  <h2 id="dialog-title">Confirm Action</h2>
  <p>Are you sure you want to proceed?</p>
  <button onClick={confirm}>Confirm</button>
  <button onClick={cancel}>Cancel</button>
</div>

<!-- Accessible tab panel -->
<div role="tablist">
  <button 
    role="tab" 
    aria-selected="true"
    aria-controls="panel-1"
    id="tab-1"
  >
    Tab 1
  </button>
</div>
<div 
  role="tabpanel" 
  id="panel-1"
  aria-labelledby="tab-1"
>
  Panel content
</div>`,
          points: [
            "Use ARIA roles to define element purpose",
            "aria-label provides accessible names",
            "aria-labelledby links labels to elements",
            "aria-describedby for additional descriptions",
            "Live regions with aria-live for dynamic content"
          ]
        },
        {
          heading: "Keyboard Navigation",
          content: "Ensure all functionality is accessible via keyboard alone.",
          code: `// Make custom component keyboard accessible
function CustomButton({ onClick, children }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className="custom-button"
    >
      {children}
    </div>
  );
}`,
          points: [
            "All interactive elements must be focusable",
            "Visible focus indicators (don't remove outlines!)",
            "Logical tab order with tabIndex",
            "Support standard keyboard shortcuts",
            "Escape key closes modals and dismisses overlays",
            "Arrow keys for navigation in custom components"
          ]
        },
        {
          heading: "Color and Contrast",
          content: "Ensure sufficient color contrast and don't rely solely on color to convey information.",
          code: `/* Good contrast ratios */
.text-normal {
  /* 4.5:1 minimum for normal text */
  color: #333333;
  background-color: #ffffff;
}

.text-large {
  /* 3:1 minimum for large text (18pt+) */
  font-size: 24px;
  color: #767676;
  background-color: #ffffff;
}

/* Don't rely on color alone */
.error {
  color: red;
  /* Add icon or text indicator */
}

.error::before {
  content: "⚠ ";
}`,
          points: [
            "4.5:1 contrast ratio for normal text",
            "3:1 ratio for large text (18pt+ or 14pt+ bold)",
            "Don't use color alone to indicate status",
            "Test with color blindness simulators",
            "Provide patterns or icons alongside colors"
          ]
        },
        {
          heading: "Alternative Text for Images",
          content: "Provide meaningful alternative text for images and media.",
          code: `<!-- Decorative images -->
<img src="divider.png" alt="" />

<!-- Informative images -->
<img 
  src="chart.png" 
  alt="Sales increased 40% in Q4 2024" 
/>

<!-- Functional images (buttons) -->
<button>
  <img src="search-icon.png" alt="Search" />
</button>

<!-- Complex images -->
<figure>
  <img 
    src="flowchart.png" 
    alt="User registration flowchart"
    aria-describedby="flowchart-desc"
  />
  <figcaption id="flowchart-desc">
    The flowchart shows three steps: 
    1. User enters email, 
    2. System sends verification, 
    3. User confirms account.
  </figcaption>
</figure>`,
          points: [
            "Decorative images: empty alt attribute",
            "Informative images: describe the content",
            "Functional images: describe the action",
            "Complex images: use aria-describedby",
            "Charts: provide data tables as alternative"
          ]
        },
        {
          heading: "Forms and Validation",
          content: "Make forms accessible with proper labels and error handling.",
          code: `<form>
  {/* Proper label association */}
  <label htmlFor="email">Email Address</label>
  <input 
    type="email" 
    id="email"
    name="email"
    required
    aria-describedby="email-help"
    aria-invalid={hasError}
  />
  <span id="email-help" className="help-text">
    We'll never share your email
  </span>
  
  {/* Error message */}
  {hasError && (
    <div 
      role="alert"
      className="error-message"
    >
      Please enter a valid email address
    </div>
  )}

  {/* Grouped inputs */}
  <fieldset>
    <legend>Contact Preferences</legend>
    <input type="checkbox" id="email-pref" />
    <label htmlFor="email-pref">Email</label>
    
    <input type="checkbox" id="sms-pref" />
    <label htmlFor="sms-pref">SMS</label>
  </fieldset>
</form>`,
          points: [
            "Associate labels with inputs using htmlFor",
            "Use aria-describedby for help text",
            "aria-invalid for error states",
            "Group related inputs with fieldset and legend",
            "Mark required fields clearly",
            "Announce errors with role='alert'"
          ]
        },
        {
          heading: "Screen Reader Testing",
          content: "Test your application with actual screen readers.",
          points: [
            "NVDA (free, Windows)",
            "JAWS (paid, Windows, most popular)",
            "VoiceOver (built-in macOS and iOS)",
            "TalkBack (built-in Android)",
            "Test navigation, forms, and dynamic content",
            "Verify announcements are clear and logical"
          ]
        },
        {
          heading: "Automated Testing Tools",
          content: "Use automated tools to catch common accessibility issues.",
          code: `// axe-core for automated testing
import { axe } from 'jest-axe';

test('should not have accessibility violations', async () => {
  const { container } = render(<MyComponent />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

// ESLint plugin for JSX accessibility
{
  "plugins": ["jsx-a11y"],
  "extends": ["plugin:jsx-a11y/recommended"]
}`,
          points: [
            "axe DevTools browser extension",
            "Lighthouse accessibility audit",
            "WAVE browser extension",
            "eslint-plugin-jsx-a11y for React",
            "Automated tools catch ~30% of issues",
            "Manual testing still essential"
          ]
        }
      ],
      conclusion: "Building accessible web applications requires intentional effort but benefits everyone. Start with semantic HTML, ensure keyboard navigation works, maintain good contrast, and test with screen readers. Accessibility is a journey, not a destination—continuously test and improve. Remember: accessible design is good design, creating better experiences for all users regardless of their abilities."
    }
  },
  {
    id: 10,
    title: "Modern API Design Patterns",
    excerpt: "Explore modern API design patterns including REST, GraphQL, and gRPC.",
    date: "2024-04-20",
    readTime: "11 min read",
    category: "API",
    author: "Shristy Jaiswal",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop",
    tags: ["API", "REST", "GraphQL", "Backend"],
    content: {
      introduction: "API design has evolved significantly over the years. While REST remains dominant, GraphQL and gRPC offer compelling alternatives for specific use cases. Understanding when to use each approach—and how to implement them well—is crucial for building scalable, maintainable backend services. This guide explores modern API design patterns and best practices.",
      sections: [
        {
          heading: "RESTful API Design",
          content: "REST (Representational State Transfer) uses HTTP methods and remains the most common API architecture.",
          code: `// Well-designed REST endpoints
GET    /api/users              // List users
GET    /api/users/123          // Get specific user
POST   /api/users              // Create user
PUT    /api/users/123          // Update user (full)
PATCH  /api/users/123          // Update user (partial)
DELETE /api/users/123          // Delete user

// Nested resources
GET    /api/users/123/posts    // User's posts
POST   /api/users/123/posts    // Create post for user

// Filtering, sorting, pagination
GET    /api/users?role=admin&sort=created_at&page=2&limit=20`,
          points: [
            "Use nouns for resources, not verbs",
            "HTTP methods indicate the action",
            "Plural names for collections",
            "Use hierarchical URLs for relationships",
            "Support filtering, sorting, and pagination",
            "Return appropriate HTTP status codes"
          ]
        },
        {
          heading: "GraphQL: Query What You Need",
          content: "GraphQL allows clients to request exactly the data they need, reducing over-fetching and under-fetching.",
          code: `# Schema definition
type User {
  id: ID!
  name: String!
  email: String!
  posts: [Post!]!
  followers: [User!]!
}

type Post {
  id: ID!
  title: String!
  content: String!
  author: User!
  comments: [Comment!]!
}

# Query example
query GetUserWithPosts {
  user(id: "123") {
    name
    email
    posts {
      title
      comments {
        text
        author {
          name
        }
      }
    }
  }
}

# Mutation example
mutation CreatePost {
  createPost(
    title: "New Post"
    content: "Post content"
  ) {
    id
    title
    author {
      name
    }
  }
}`,
          points: [
            "Single endpoint for all queries",
            "Clients specify exactly what data they need",
            "Strongly typed schema",
            "Reduces number of API requests",
            "Real-time via subscriptions",
            "Better for complex, interconnected data"
          ]
        },
        {
          heading: "gRPC: High-Performance RPC",
          content: "gRPC uses Protocol Buffers and HTTP/2 for high-performance, strongly-typed communication.",
          code: `// Protocol Buffer definition
syntax = "proto3";

service UserService {
  rpc GetUser (GetUserRequest) returns (User);
  rpc ListUsers (ListUsersRequest) returns (stream User);
  rpc CreateUser (CreateUserRequest) returns (User);
}

message User {
  string id = 1;
  string name = 2;
  string email = 3;
  repeated Post posts = 4;
}

message GetUserRequest {
  string id = 1;
}

// Client usage
const client = new UserServiceClient('localhost:50051');
const request = new GetUserRequest();
request.setId('123');

client.getUser(request, (err, user) => {
  console.log('User:', user.getName());
});`,
          points: [
            "Binary protocol, very efficient",
            "Strongly typed with Protocol Buffers",
            "Supports streaming (client, server, bidirectional)",
            "Built on HTTP/2 for multiplexing",
            "Language-agnostic code generation",
            "Best for microservices communication"
          ]
        },
        {
          heading: "API Versioning Strategies",
          content: "Plan for API evolution with proper versioning to avoid breaking clients.",
          code: `// URL versioning (most common)
GET /api/v1/users
GET /api/v2/users

// Header versioning
GET /api/users
Headers: Accept: application/vnd.myapi.v2+json

// Query parameter
GET /api/users?version=2

// Content negotiation
GET /api/users
Headers: Accept: application/vnd.myapi+json; version=2`,
          points: [
            "URL versioning is most explicit and discoverable",
            "Major versions in URL (v1, v2)",
            "Minor versions can use headers",
            "Maintain old versions during deprecation period",
            "Document migration paths",
            "Use semantic versioning principles"
          ]
        },
        {
          heading: "Authentication and Authorization",
          content: "Secure your APIs with proper authentication and authorization mechanisms.",
          code: `// JWT (JSON Web Token) authentication
POST /api/auth/login
{
  "email": "user@example.com",
  "password": "password123"
}

Response:
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "refresh_token_here",
  "expiresIn": 3600
}

// Using the token
GET /api/users/profile
Headers:
  Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

// OAuth 2.0 flow
GET /oauth/authorize?
  client_id=CLIENT_ID&
  redirect_uri=https://app.com/callback&
  response_type=code&
  scope=read:user

// API Key authentication
GET /api/data
Headers:
  X-API-Key: your_api_key_here`,
          points: [
            "JWT for stateless authentication",
            "OAuth 2.0 for third-party integrations",
            "API keys for server-to-server",
            "Implement token refresh mechanisms",
            "Use HTTPS for all authenticated endpoints",
            "Implement rate limiting per user/key"
          ]
        },
        {
          heading: "Error Handling and Status Codes",
          content: "Provide clear, consistent error responses with appropriate HTTP status codes.",
          code: `// Consistent error response format
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "The provided data is invalid",
    "details": [
      {
        "field": "email",
        "message": "Email format is invalid"
      },
      {
        "field": "password",
        "message": "Password must be at least 8 characters"
      }
    ],
    "timestamp": "2024-05-20T10:30:00Z",
    "requestId": "req_abc123"
  }
}

// Common status codes
200 OK                  // Successful GET
201 Created            // Successful POST
204 No Content         // Successful DELETE
400 Bad Request        // Client error (validation)
401 Unauthorized       // Authentication required
403 Forbidden          // Authenticated but not authorized
404 Not Found          // Resource doesn't exist
409 Conflict           // Conflict (duplicate, etc.)
429 Too Many Requests  // Rate limit exceeded
500 Internal Server Error  // Server error`,
          points: [
            "Use standard HTTP status codes",
            "Include machine-readable error codes",
            "Provide human-readable messages",
            "Add context with error details",
            "Include request IDs for debugging",
            "Don't expose sensitive information in errors"
          ]
        },
        {
          heading: "Rate Limiting and Throttling",
          content: "Protect your API from abuse and ensure fair resource allocation.",
          code: `// Rate limit headers
HTTP/1.1 200 OK
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1620000000

// Rate limit exceeded response
HTTP/1.1 429 Too Many Requests
Retry-After: 3600
{
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Too many requests. Try again later."
  }
}`,
          points: [
            "Implement per-user or per-IP rate limits",
            "Use sliding window or token bucket algorithms",
            "Return rate limit info in response headers",
            "Provide Retry-After header when exceeded",
            "Different limits for different tiers",
            "Document rate limits clearly"
          ]
        },
        {
          heading: "API Documentation",
          content: "Comprehensive documentation is essential for API adoption.",
          code: `// OpenAPI (Swagger) specification
openapi: 3.0.0
info:
  title: User API
  version: 1.0.0
paths:
  /users:
    get:
      summary: List users
      parameters:
        - name: page
          in: query
          schema:
            type: integer
      responses:
        '200':
          description: Success
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/User'`,
          points: [
            "Use OpenAPI/Swagger for REST APIs",
            "Provide interactive documentation (Swagger UI)",
            "Include code examples in multiple languages",
            "Document authentication requirements",
            "Show sample requests and responses",
            "Keep docs in sync with implementation"
          ]
        },
        {
          heading: "Caching Strategies",
          content: "Implement caching to improve performance and reduce server load.",
          code: `// Cache headers
GET /api/users/123

Response:
HTTP/1.1 200 OK
Cache-Control: max-age=3600, private
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
Last-Modified: Mon, 20 May 2024 10:00:00 GMT

// Conditional requests
GET /api/users/123
If-None-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"

Response:
HTTP/1.1 304 Not Modified`,
          points: [
            "Use ETags for cache validation",
            "Set appropriate Cache-Control headers",
            "Support conditional requests (If-None-Match)",
            "Cache static data aggressively",
            "Use CDNs for geographically distributed data",
            "Consider Redis for application-level caching"
          ]
        }
      ],
      conclusion: "Modern API design involves choosing the right architecture (REST, GraphQL, or gRPC) for your use case and implementing it with best practices. Focus on consistency, security, clear documentation, and performance optimization. Remember that a well-designed API is a product itself—invest in versioning strategies, comprehensive documentation, and monitoring to ensure long-term success."
    }
  },
  {
    id: 11,
    title: "Designing for Dark Mode",
    excerpt: "Best practices for implementing dark mode in your applications.",
    date: "2024-04-15",
    readTime: "6 min read",
    category: "Design",
    author: "Shristy Jaiswal",
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&h=400&fit=crop",
    tags: ["Design", "Dark Mode", "UI/UX"],
    content: {
      introduction: "Dark mode has become an expected feature in modern applications. When done well, it reduces eye strain, saves battery on OLED screens, and provides a sleek, modern aesthetic. However, implementing dark mode is more than just inverting colors—it requires careful consideration of contrast, readability, and user experience. This guide covers everything you need to know to implement dark mode effectively.",
      sections: [
        {
          heading: "Why Dark Mode Matters",
          content: "Understanding the benefits helps create better implementations.",
          points: [
            "Reduces eye strain in low-light environments",
            "Saves battery life on OLED/AMOLED displays",
            "Better for accessibility (photosensitivity)",
            "Follows user preferences and system settings",
            "Modern aesthetic that users expect",
            "Can help content (photos, videos) stand out"
          ]
        },
        {
          heading: "Color Theory for Dark Mode",
          content: "Dark mode isn't just light mode inverted—it requires a different color approach.",
          code: `// CSS Custom Properties for theming
:root {
  /* Light mode */
  --bg-primary: #ffffff;
  --bg-secondary: #f5f5f5;
  --text-primary: #1a1a1a;
  --text-secondary: #666666;
  --border: #e0e0e0;
  --accent: #0066cc;
}

[data-theme="dark"] {
  /* Dark mode - not just inverted! */
  --bg-primary: #121212;
  --bg-secondary: #1e1e1e;
  --text-primary: #e0e0e0;
  --text-secondary: #a0a0a0;
  --border: #333333;
  --accent: #4d9fff;
}

/* Usage */
.card {
  background: var(--bg-secondary);
  color: var(--text-primary);
  border: 1px solid var(--border);
}`,
          points: [
            "Use dark gray (#121212) not pure black (#000000)",
            "Pure black can cause eye strain with OLED screens",
            "Desaturate colors slightly for dark mode",
            "Increase brightness of accent colors",
            "Maintain contrast ratios (4.5:1 for text)",
            "Use elevation through lighter surface colors"
          ]
        },
        {
          heading: "Contrast and Readability",
          content: "Maintaining proper contrast is crucial for readability in dark mode.",
          code: `/* Light mode contrast */
.light-text {
  color: #333333;  /* AA compliant on white */
  background: #ffffff;
}

/* Dark mode - adjust for readability */
[data-theme="dark"] .light-text {
  color: #e0e0e0;  /* Not #cccccc - too bright! */
  background: #121212;
}

/* Links need more attention in dark mode */
.link {
  color: #0066cc;  /* Light mode */
}

[data-theme="dark"] .link {
  color: #4d9fff;  /* Lighter for dark backgrounds */
}`,
          points: [
            "White text on pure black is too harsh",
            "Use off-white (#e0e0e0) on dark gray (#121212)",
            "Test contrast ratios with tools",
            "Links may need more brightness in dark mode",
            "Reduce opacity for subtle text, not just color",
            "Consider color blindness in both modes"
          ]
        },
        {
          heading: "Elevation and Depth",
          content: "In light mode, shadows create depth. In dark mode, lighter surfaces work better.",
          code: `/* Light mode - shadows for elevation */
.card-light {
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* Dark mode - lighter backgrounds for elevation */
[data-theme="dark"] .card-dark {
  /* Higher elevation = lighter surface */
  background: #1e1e1e;  /* Base elevation */
}

[data-theme="dark"] .card-elevated {
  background: #252525;  /* Elevated */
}

[data-theme="dark"] .modal {
  background: #2d2d2d;  /* High elevation */
}

/* Subtle shadows still help in dark mode */
[data-theme="dark"] .with-shadow {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
}`,
          points: [
            "Light mode: darker shadows for depth",
            "Dark mode: lighter surfaces for elevation",
            "Material Design elevation scale: 0dp to 24dp",
            "Modals should be lightest (highest elevation)",
            "Maintain consistent elevation hierarchy",
            "Combine lighter backgrounds with subtle shadows"
          ]
        },
        {
          heading: "Images and Media",
          content: "Handle images carefully—they can be too bright or lose context in dark mode.",
          code: `/* Reduce image brightness in dark mode */
[data-theme="dark"] img {
  opacity: 0.8;
}

/* Don't reduce opacity for profile pictures */
[data-theme="dark"] .profile-image {
  opacity: 1;
}

/* Use CSS filters for adjustments */
[data-theme="dark"] .photo {
  filter: brightness(0.8) contrast(1.2);
}

/* Dark overlay for bright images */
[data-theme="dark"] .hero-image::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.2);
}`,
          points: [
            "Reduce brightness of large images by 10-20%",
            "Provide alternative images for logos/icons",
            "Use SVGs with fill colors that adapt",
            "Consider dark variants for illustrations",
            "Don't override user-uploaded photos too much",
            "Test images on both backgrounds"
          ]
        },
        {
          heading: "Implementing Theme Switching",
          content: "Let users control their theme preference with smooth transitions.",
          code: `// React implementation
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Check system preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme(mediaQuery.matches ? 'dark' : 'light');
    }

    // Listen for system changes
    const handler = (e) => {
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Smooth transitions
* {
  transition: background-color 0.3s ease, 
              color 0.3s ease,
              border-color 0.3s ease;
}`,
          points: [
            "Respect system preferences by default",
            "Allow manual override",
            "Save preference to localStorage",
            "Add smooth transitions between themes",
            "Provide toggle in accessible location",
            "Show current theme state clearly"
          ]
        },
        {
          heading: "Testing Dark Mode",
          content: "Thorough testing ensures dark mode looks good in all scenarios.",
          points: [
            "Test on actual devices with OLED screens",
            "Review all UI states (hover, focus, active)",
            "Check loading skeletons and placeholders",
            "Verify form validation messages",
            "Test with different accent colors",
            "Use contrast ratio checkers",
            "Test in various lighting conditions",
            "Get feedback from actual users"
          ]
        },
        {
          heading: "Common Mistakes to Avoid",
          content: "Learn from common dark mode implementation pitfalls.",
          points: [
            "Don't use pure black (#000000)",
            "Don't just invert colors automatically",
            "Don't make everything the same darkness",
            "Don't ignore contrast ratios",
            "Don't force users into dark mode",
            "Don't forget to theme all components",
            "Don't make images too dim",
            "Don't forget about loading states"
          ]
        },
        {
          heading: "Platform-Specific Considerations",
          content: "Different platforms have specific dark mode guidelines.",
          code: `/* iOS/macOS considerations */
@media (prefers-color-scheme: dark) {
  /* Use system colors when possible */
  body {
    background: color(display-p3 0.07 0.07 0.07);
  }
}

/* Android Material Design */
.material-dark {
  /* Elevation overlay with white */
  --elevation: rgba(255, 255, 255, 0.05);
}`,
          points: [
            "iOS: Follow Human Interface Guidelines",
            "Android: Use Material Design elevation overlays",
            "Web: Respect prefers-color-scheme media query",
            "Windows: Follow Fluent Design System",
            "Consider platform-specific color palettes",
            "Test on each target platform"
          ]
        }
      ],
      conclusion: "Implementing dark mode effectively requires more thought than flipping a switch. Focus on proper contrast ratios, use dark gray instead of black, create depth through elevation, and respect user preferences. Test thoroughly across devices and lighting conditions. When done right, dark mode becomes a feature users appreciate and actively choose, enhancing their experience with your application at any time of day."
    }
  },
  {
    id: 12,
    title: "Testing Strategies for Mobile Apps",
    excerpt: "Comprehensive guide to testing mobile applications.",
    date: "2024-04-10",
    readTime: "10 min read",
    category: "Testing",
    author: "Shristy Jaiswal",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop",
    tags: ["Testing", "Mobile", "Quality Assurance"],
    content: {
      introduction: "Testing is essential for delivering high-quality mobile applications. With diverse devices, operating systems, and user scenarios, a comprehensive testing strategy is crucial. This guide covers everything from unit tests to end-to-end testing, helping you build confidence in your mobile app's reliability and performance.",
      sections: [
        {
          heading: "The Testing Pyramid",
          content: "Understanding the testing pyramid helps balance different testing types for optimal coverage and efficiency.",
          points: [
            "Bottom layer: Unit tests (70%) - Fast, isolated, many",
            "Middle layer: Integration tests (20%) - Component interaction",
            "Top layer: E2E/UI tests (10%) - Full user flows, slow",
            "More tests at the bottom = faster feedback",
            "Balance coverage with maintenance cost",
            "Aim for high confidence with minimal redundancy"
          ]
        },
        {
          heading: "Unit Testing",
          content: "Unit tests verify individual functions and classes in isolation.",
          code: `// Flutter unit test example
import 'package:flutter_test/flutter_test.dart';

class Calculator {
  int add(int a, int b) => a + b;
  int divide(int a, int b) {
    if (b == 0) throw ArgumentError('Cannot divide by zero');
    return a ~/ b;
  }
}

void main() {
  group('Calculator', () {
    late Calculator calculator;

    setUp(() {
      calculator = Calculator();
    });

    test('adds two numbers correctly', () {
      expect(calculator.add(2, 3), equals(5));
      expect(calculator.add(-1, 1), equals(0));
    });

    test('throws error when dividing by zero', () {
      expect(
        () => calculator.divide(10, 0),
        throwsArgumentError,
      );
    });
  });
}

// React Native with Jest
describe('Calculator', () => {
  test('adds two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });

  test('throws error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow();
  });
});`,
          points: [
            "Test public interfaces, not implementation",
            "One assertion per test (mostly)",
            "Use descriptive test names",
            "Test edge cases and error conditions",
            "Keep tests fast (< 100ms each)",
            "Mock external dependencies"
          ]
        },
        {
          heading: "Widget/Component Testing",
          content: "Test UI components in isolation without full app context.",
          code: `// Flutter widget test
testWidgets('Counter increments', (WidgetTester tester) async {
  await tester.pumpWidget(MyApp());

  // Verify initial state
  expect(find.text('0'), findsOneWidget);
  expect(find.text('1'), findsNothing);

  // Tap increment button
  await tester.tap(find.byIcon(Icons.add));
  await tester.pump();

  // Verify state changed
  expect(find.text('0'), findsNothing);
  expect(find.text('1'), findsOneWidget);
});

// React Native with Testing Library
import { render, fireEvent } from '@testing-library/react-native';

test('Counter increments', () => {
  const { getByText, getByRole } = render(<Counter />);
  
  expect(getByText('0')).toBeTruthy();
  
  fireEvent.press(getByRole('button'));
  
  expect(getByText('1')).toBeTruthy();
});`,
          points: [
            "Test component behavior, not implementation",
            "Interact as users would (tap, scroll, input)",
            "Verify visual output",
            "Test different states (loading, error, success)",
            "Mock network requests and APIs",
            "Test accessibility features"
          ]
        },
        {
          heading: "Integration Testing",
          content: "Test how multiple components work together.",
          code: `// Flutter integration test
void main() {
  group('Login flow', () {
    testWidgets('successful login navigates to home', 
      (WidgetTester tester) async {
      // Arrange
      await tester.pumpWidget(MyApp());
      
      // Act
      await tester.enterText(
        find.byKey(Key('email-field')), 
        'test@example.com'
      );
      await tester.enterText(
        find.byKey(Key('password-field')), 
        'password123'
      );
      await tester.tap(find.byKey(Key('login-button')));
      await tester.pumpAndSettle();
      
      // Assert
      expect(find.byType(HomePage), findsOneWidget);
    });
  });
}`,
          points: [
            "Test feature flows (registration, checkout)",
            "Include real dependencies when possible",
            "Mock external services (APIs, databases)",
            "Test state management integration",
            "Verify navigation between screens",
            "Test data persistence"
          ]
        },
        {
          heading: "End-to-End Testing",
          content: "Test complete user journeys in a production-like environment.",
          code: `// Detox E2E test (React Native)
describe('App E2E', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should complete checkout flow', async () => {
    // Navigate to product
    await element(by.id('product-list')).tap();
    await element(by.text('iPhone 13')).tap();
    
    // Add to cart
    await element(by.id('add-to-cart')).tap();
    await expect(element(by.text('Added to cart'))).toBeVisible();
    
    // Go to cart
    await element(by.id('cart-icon')).tap();
    await expect(element(by.id('cart-item'))).toBeVisible();
    
    // Checkout
    await element(by.id('checkout-button')).tap();
    await element(by.id('payment-info')).typeText('4242424242424242');
    await element(by.id('submit-order')).tap();
    
    // Verify success
    await waitFor(element(by.text('Order confirmed')))
      .toBeVisible()
      .withTimeout(5000);
  });
});

// Flutter integration_test
void main() {
  IntegrationTestWidgetsFlutterBinding.ensureInitialized();

  testWidgets('complete shopping flow', (tester) async {
    app.main();
    await tester.pumpAndSettle();
    
    // Similar flow as above
  });
}`,
          points: [
            "Test critical user paths",
            "Use real backend or staging environment",
            "Test on multiple devices/OS versions",
            "Include positive and negative scenarios",
            "Test offline scenarios",
            "Automate regression testing"
          ]
        },
        {
          heading: "API and Network Testing",
          content: "Test API integration and network handling.",
          code: `// Mock API responses
class MockApiService implements ApiService {
  @override
  Future<User> getUser(String id) async {
    await Future.delayed(Duration(milliseconds: 100));
    if (id == 'error') throw Exception('User not found');
    return User(id: id, name: 'Test User');
  }
}

// Test with mock
test('loads user successfully', () async {
  final service = MockApiService();
  final user = await service.getUser('123');
  
  expect(user.name, equals('Test User'));
});

// Test error handling
test('handles API errors', () async {
  final service = MockApiService();
  
  expect(
    () => service.getUser('error'),
    throwsException,
  );
});

// Test network states
testWidgets('shows error when offline', (tester) async {
  // Mock network to be offline
  when(connectivity.checkConnectivity())
    .thenAnswer((_) => Future.value(ConnectivityResult.none));
  
  await tester.pumpWidget(MyApp());
  await tester.tap(find.byKey(Key('refresh')));
  await tester.pump();
  
  expect(find.text('No internet connection'), findsOneWidget);
});`,
          points: [
            "Mock API responses for consistent tests",
            "Test success and error scenarios",
            "Verify timeout handling",
            "Test offline functionality",
            "Validate request/response format",
            "Test retry logic"
          ]
        },
        {
          heading: "Performance Testing",
          content: "Ensure your app performs well under various conditions.",
          points: [
            "Measure app startup time",
            "Test frame rate (should be 60fps)",
            "Monitor memory usage",
            "Test with slow network conditions",
            "Profile CPU usage",
            "Test battery consumption",
            "Use Flutter DevTools or Xcode Instruments",
            "Set performance budgets"
          ]
        },
        {
          heading: "Accessibility Testing",
          content: "Ensure your app is usable by everyone.",
          code: `// Flutter semantics test
testWidgets('has proper semantics', (tester) async {
  await tester.pumpWidget(MyApp());
  
  // Verify screen reader labels
  expect(
    find.bySemanticsLabel('Increment counter'),
    findsOneWidget,
  );
  
  // Check semantic properties
  final semantics = tester.getSemantics(
    find.byType(ElevatedButton)
  );
  expect(semantics.isButton, isTrue);
  expect(semantics.isEnabled, isTrue);
});`,
          points: [
            "Test with screen readers (TalkBack, VoiceOver)",
            "Verify semantic labels",
            "Test keyboard navigation",
            "Check color contrast ratios",
            "Test with large text sizes",
            "Verify focus indicators",
            "Test switch control",
            "Use accessibility scanners"
          ]
        },
        {
          heading: "Device and Platform Testing",
          content: "Test across different devices and operating systems.",
          points: [
            "Test on physical devices, not just emulators",
            "Cover low-end and high-end devices",
            "Test on different screen sizes and orientations",
            "Test on latest and older OS versions",
            "Use cloud device farms (Firebase Test Lab, AWS Device Farm)",
            "Test platform-specific features",
            "Verify adaptive layouts",
            "Test with different system settings"
          ]
        },
        {
          heading: "Continuous Integration",
          content: "Automate testing in your CI/CD pipeline.",
          code: `# GitHub Actions example
name: Flutter CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: subosito/flutter-action@v2
      
      - name: Install dependencies
        run: flutter pub get
      
      - name: Analyze code
        run: flutter analyze
      
      - name: Run unit tests
        run: flutter test --coverage
      
      - name: Upload coverage
        uses: codecov/codecov-action@v2
      
      - name: Build APK
        run: flutter build apk --release`,
          points: [
            "Run tests on every commit",
            "Enforce code coverage thresholds",
            "Run linting and static analysis",
            "Build app to catch compilation errors",
            "Test on multiple OS versions",
            "Generate and review test reports",
            "Block merges if tests fail",
            "Monitor test execution time"
          ]
        }
      ],
      conclusion: "A comprehensive testing strategy is essential for mobile app quality. Follow the testing pyramid, automate where possible, and test continuously throughout development. Remember that testing is an investment that pays dividends in reduced bugs, faster releases, and happier users. Start with unit tests for core logic, add widget tests for UI components, and use E2E tests for critical flows. Most importantly, make testing part of your development culture, not an afterthought."
    }
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPostsData.find(p => p.id === parseInt(id || '0'));
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      const url = window.location.href;
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <AnimatedPage>
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Link 
                to="/blog"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
              >
                <ArrowLeft size={20} />
                Back to Blog
              </Link>

              <div className="mb-6">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium border border-primary/20">
                  {post.category}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
                <span className="flex items-center gap-2">
                  <User size={18} />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar size={18} />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={18} />
                  {post.readTime}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="flex items-center gap-1 px-3 py-1 bg-secondary text-muted-foreground text-sm rounded-full border border-border"
                  >
                    <Tag size={14} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto -mt-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {post.content.introduction}
                </p>
              </div>

              {/* Main Content Sections */}
              {post.content.sections.map((section, index) => (
                <div key={index} className="mb-12">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    {section.heading}
                  </h2>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {section.content}
                  </p>

                  {section.code && (
                    <div className="my-6 bg-card border border-border rounded-lg overflow-hidden">
                      <div className="bg-muted px-4 py-2 border-b border-border">
                        <span className="text-sm font-mono text-muted-foreground">Code</span>
                      </div>
                      <pre className="p-4 overflow-x-auto">
                        <code className="text-sm font-mono text-foreground">
                          {section.code}
                        </code>
                      </pre>
                    </div>
                  )}

                  {section.points && section.points.length > 0 && (
                    <ul className="space-y-3 mt-6">
                      {section.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start gap-3 text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-lg leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {/* Conclusion */}
              <div className="mt-12 p-8 bg-muted rounded-lg border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">Conclusion</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {post.content.conclusion}
                </p>
              </div>

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Found this helpful?</h3>
                    <p className="text-muted-foreground">Share it with others who might benefit</p>
                  </div>
                  <button 
                    onClick={handleCopyLink}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all font-medium ${
                      copied 
                        ? 'bg-green-600 text-white' 
                        : 'bg-primary text-primary-foreground hover:bg-primary/90'
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check size={18} />
                        Link Copied!
                      </>
                    ) : (
                      <>
                        <Share2 size={18} />
                        Copy Link
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Back to Blog */}
              <div className="mt-12 text-center">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-foreground rounded-lg hover:bg-secondary/80 transition-colors font-medium"
                >
                  <ArrowLeft size={18} />
                  Back to All Articles
                </Link>
              </div>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </AnimatedPage>
  );
};

export default BlogPost;
