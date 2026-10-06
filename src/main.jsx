import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 40, fontFamily: 'sans-serif', maxWidth: 800, margin: '40px auto', background: '#fff', borderRadius: 12, border: '1px solid #e5e5e5', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
          <h2 style={{ color: '#b91c1c', marginTop: 0 }}>Application Encountered an Error</h2>
          <p style={{ color: '#4b5563' }}>Please check the details below or refresh the page:</p>
          <pre style={{ background: '#fef2f2', border: '1px solid #fee2f2', padding: 16, borderRadius: 8, color: '#991b1b', overflowX: 'auto', fontSize: 13 }}>
            {this.state.error?.toString()}
          </pre>
          <button
            onClick={() => window.location.reload()}
            style={{ marginTop: 10, padding: '10px 20px', background: '#c5a059', color: '#ffffff', border: 'none', borderRadius: 8, fontWeight: 'bold', cursor: 'pointer' }}
          >
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

/**
 * Fallback for environments where the compositor is throttled (embedded
 * webviews, headless captures, prereduced-motion settings): if
 * requestAnimationFrame never fires shortly after load, reveal all
 * scroll-triggered cards immediately and stop CSS marquees so nothing
 * is stuck invisible.
 */
function useCompositorFallback() {
  useEffect(() => {
    let rafFired = false;
    const id = requestAnimationFrame(() => { rafFired = true; });

    const timer = setTimeout(() => {
      if (rafFired) return; // Normal environment — animations will run

      document.documentElement.classList.add('no-anim');
      document.querySelectorAll('.reveal-card').forEach((el) => {
        el.classList.add('is-visible');
      });
    }, 1500);

    return () => {
      cancelAnimationFrame(id);
      clearTimeout(timer);
    };
  }, []);
}

function Root() {
  useCompositorFallback();
  return (
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
