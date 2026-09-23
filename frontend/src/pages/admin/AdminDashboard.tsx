import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '@/lib/api';
import {
  LogOut,
  RefreshCw,
  FileText,
  Clock,
  CheckCircle,
  XCircle,
  X,
  Save,
  Mail,
  Phone,
  Building2,
  Package,
  CalendarDays,
  MessageSquare,
  User,
KeyRound,
} from 'lucide-react';

interface QuoteRequest {
  id: string;
  fullName: string;
  companyName: string | null;
  email: string;
  phone: string | null;
  quantity: number | null;
  budgetPerGift: string | null;
  occasion: string | null;
  message: string | null;
  status: string;
  adminNotes: string | null;
  createdAt: string;
  updatedAt: string;
}

const STATUSES = [
  'New',
  'Contacted',
  'In Progress',
  'Completed',
  'Cancelled',
];

export function AdminDashboard() {
  const navigate = useNavigate();

  const [quotes, setQuotes] = useState<QuoteRequest[]>([]);
  const [selectedQuote, setSelectedQuote] =
    useState<QuoteRequest | null>(null);

  const [selectedStatus, setSelectedStatus] = useState('');
  const [adminNotes, setAdminNotes] = useState('');

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [showAccountSettings, setShowAccountSettings] = useState(false);

const [adminEmail, setAdminEmail] = useState(() => {
  try {
    const admin = JSON.parse(localStorage.getItem('adminUser') || 'null');
    return admin?.email || '';
  } catch {
    return '';
  }
});

const [newEmail, setNewEmail] = useState('');
const [currentPassword, setCurrentPassword] = useState('');
const [newPassword, setNewPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');

const [accountLoading, setAccountLoading] = useState(false);
const [accountError, setAccountError] = useState('');
const [accountSuccess, setAccountSuccess] = useState('');

  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const fetchQuotes = async () => {
    const token = localStorage.getItem('adminToken');

    if (!token) {
      navigate('/admin/login');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const response = await fetch(
        `${API_URL}/api/admin/quotes`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (response.status === 401) {
        localStorage.removeItem('adminToken');
        navigate('/admin/login');
        return;
      }

      if (!response.ok) {
        throw new Error(
          data.message || 'Failed to fetch quote requests.'
        );
      }

      setQuotes(data.quotes);
    } catch (error) {
      setErrorMsg(
        error instanceof Error
          ? error.message
          : 'Something went wrong.'
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  const handleChangeEmail = async () => {
  const token = localStorage.getItem('adminToken');

  if (!token) {
    navigate('/admin/login');
    return;
  }

  const email = newEmail.trim().toLowerCase();

  if (!email) {
    setAccountError('Please enter a new email address.');
    return;
  }

  setAccountLoading(true);
  setAccountError('');
  setAccountSuccess('');

  try {
    const response = await fetch(`${API_URL}/api/auth/email`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (response.status === 401) {
      localStorage.removeItem('adminToken');
      navigate('/admin/login');
      return;
    }

    if (!response.ok) {
      throw new Error(data.message || 'Unable to update email.');
    }

    setAdminEmail(data.admin.email);
    setNewEmail('');

    const existingAdmin = JSON.parse(
      localStorage.getItem('adminUser') || '{}'
    );

    localStorage.setItem(
      'adminUser',
      JSON.stringify({
        ...existingAdmin,
        id: data.admin.id,
        email: data.admin.email,
      })
    );

    setAccountSuccess('Email updated successfully.');
  } catch (error) {
    setAccountError(
      error instanceof Error
        ? error.message
        : 'Something went wrong while updating email.'
    );
  } finally {
    setAccountLoading(false);
  }
};

const handleChangePassword = async () => {
  const token = localStorage.getItem('adminToken');

  if (!token) {
    navigate('/admin/login');
    return;
  }

  if (!currentPassword || !newPassword || !confirmPassword) {
    setAccountError('Please fill in all password fields.');
    return;
  }

  if (newPassword.length < 8) {
    setAccountError('New password must be at least 8 characters long.');
    return;
  }

  if (newPassword !== confirmPassword) {
    setAccountError('New passwords do not match.');
    return;
  }

  setAccountLoading(true);
  setAccountError('');
  setAccountSuccess('');

  try {
    const response = await fetch(`${API_URL}/api/auth/password`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        currentPassword,
        newPassword,
      }),
    });

    const data = await response.json();

    if (response.status === 401) {
      localStorage.removeItem('adminToken');
      navigate('/admin/login');
      return;
    }

    if (!response.ok) {
      throw new Error(data.message || 'Unable to update password.');
    }

    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');

    setAccountSuccess(
      'Password updated successfully. Please log in again.'
    );

    setTimeout(() => {
      localStorage.removeItem('adminToken');
      navigate('/admin/login');
    }, 1500);
  } catch (error) {
    setAccountError(
      error instanceof Error
        ? error.message
        : 'Something went wrong while updating password.'
    );
  } finally {
    setAccountLoading(false);
  }
};

  const handleSelectQuote = (quote: QuoteRequest) => {
    setSelectedQuote(quote);
    setSelectedStatus(quote.status);
    setAdminNotes(quote.adminNotes || '');
    setErrorMsg('');
    setSuccessMsg('');
  };

  const handleCloseDetails = () => {
    setSelectedQuote(null);
    setSelectedStatus('');
    setAdminNotes('');
    setErrorMsg('');
    setSuccessMsg('');
  };

  const handleUpdateQuote = async () => {
    if (!selectedQuote) {
      return;
    }

    const token = localStorage.getItem('adminToken');

    if (!token) {
      navigate('/admin/login');
      return;
    }

    setSaving(true);
    setErrorMsg('');
    setSuccessMsg('');

    try {
      const response = await fetch(
        `${API_URL}/api/admin/quotes/${selectedQuote.id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            status: selectedStatus,
            adminNotes,
          }),
        }
      );

      const data = await response.json();

      if (response.status === 401) {
        localStorage.removeItem('adminToken');
        navigate('/admin/login');
        return;
      }

      if (!response.ok) {
        throw new Error(
          data.message || 'Failed to update quote.'
        );
      }

      // Update the quote in the dashboard list
      setQuotes((currentQuotes) =>
        currentQuotes.map((quote) =>
          quote.id === selectedQuote.id
            ? data.quote
            : quote
        )
      );

      // Update the currently selected quote
      setSelectedQuote(data.quote);

      setSelectedStatus(data.quote.status);
      setAdminNotes(data.quote.adminNotes || '');

      setSuccessMsg('Quote updated successfully.');
    } catch (error) {
      setErrorMsg(
        error instanceof Error
          ? error.message
          : 'Something went wrong while updating the quote.'
      );
    } finally {
      setSaving(false);
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'New':
        return 'bg-blue-50 text-blue-700';

      case 'Contacted':
        return 'bg-yellow-50 text-yellow-700';

      case 'In Progress':
        return 'bg-purple-50 text-purple-700';

      case 'Completed':
        return 'bg-green-50 text-green-700';

      case 'Cancelled':
        return 'bg-red-50 text-red-700';

      default:
        return 'bg-gray-50 text-gray-700';
    }
  };

  const newQuotes = quotes.filter(
    (quote) => quote.status === 'New'
  ).length;

  const contactedQuotes = quotes.filter(
    (quote) => quote.status === 'Contacted'
  ).length;

  const completedQuotes = quotes.filter(
    (quote) => quote.status === 'Completed'
  ).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">
              Corporate Khushiyaan
            </h1>

            <p className="text-sm text-gray-500">
              Admin Dashboard
            </p>
          </div>

          <div className="flex items-center gap-3">

             {/* Account */}
            <button
              onClick={() => {
              setShowAccountSettings(true);
              setAccountError('');
              setAccountSuccess('');
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition text-sm font-medium"
           >
             <User className="w-4 h-4" />
              Account
            </button>


             {/* Refresh */}
            <button
              onClick={fetchQuotes}
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-50 transition text-sm font-medium"
            >
              <RefreshCw className="w-4 h-4" />
              Refresh
            </button>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 hover:bg-gray-800 text-white transition text-sm font-medium"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  Total Quotes
                </p>

                <p className="text-3xl font-bold text-gray-900 mt-1">
                  {quotes.length}
                </p>
              </div>

              <FileText className="w-8 h-8 text-gray-400" />
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  New
                </p>

                <p className="text-3xl font-bold text-gray-900 mt-1">
                  {newQuotes}
                </p>
              </div>

              <Clock className="w-8 h-8 text-blue-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  Contacted
                </p>

                <p className="text-3xl font-bold text-gray-900 mt-1">
                  {contactedQuotes}
                </p>
              </div>

              <Clock className="w-8 h-8 text-yellow-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  Completed
                </p>

                <p className="text-3xl font-bold text-gray-900 mt-1">
                  {completedQuotes}
                </p>
              </div>

              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
          </div>
        </div>

        {/* Error */}
        {errorMsg && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-700 rounded-lg p-4">
            {errorMsg}
          </div>
        )}

        {/* Quote Table */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              Quote Requests
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Click a quote to view and manage its details.
            </p>
          </div>

          {loading ? (
            <div className="p-10 text-center text-gray-500">
              Loading quote requests...
            </div>
          ) : quotes.length === 0 ? (
            <div className="p-10 text-center">
              <FileText className="w-10 h-10 mx-auto text-gray-300 mb-3" />

              <p className="text-gray-600 font-medium">
                No quote requests yet.
              </p>

              <p className="text-sm text-gray-400 mt-1">
                New requests will appear here.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left px-6 py-4 font-semibold text-gray-600">
                      Customer
                    </th>

                    <th className="text-left px-6 py-4 font-semibold text-gray-600">
                      Contact
                    </th>

                    <th className="text-left px-6 py-4 font-semibold text-gray-600">
                      Quantity
                    </th>

                    <th className="text-left px-6 py-4 font-semibold text-gray-600">
                      Occasion
                    </th>

                    <th className="text-left px-6 py-4 font-semibold text-gray-600">
                      Status
                    </th>

                    <th className="text-left px-6 py-4 font-semibold text-gray-600">
                      Date
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">
                  {quotes.map((quote) => (
                    <tr
                      key={quote.id}
                      onClick={() => handleSelectQuote(quote)}
                      className="hover:bg-gray-50 transition cursor-pointer"
                    >
                      <td className="px-6 py-4">
                        <p className="font-medium text-gray-900">
                          {quote.fullName}
                        </p>

                        {quote.companyName && (
                          <p className="text-gray-500 text-xs mt-1">
                            {quote.companyName}
                          </p>
                        )}
                      </td>

                      <td className="px-6 py-4">
                        <p className="text-gray-700">
                          {quote.email}
                        </p>

                        {quote.phone && (
                          <p className="text-gray-500 text-xs mt-1">
                            {quote.phone}
                          </p>
                        )}
                      </td>

                      <td className="px-6 py-4 text-gray-700">
                        {quote.quantity ?? '-'}
                      </td>

                      <td className="px-6 py-4 text-gray-700">
                        {quote.occasion ?? '-'}
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusClass(
                            quote.status
                          )}`}
                        >
                          {quote.status}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-gray-500 whitespace-nowrap">
                        {new Date(
                          quote.createdAt
                        ).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* Quote Details Modal */}
      {selectedQuote && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={handleCloseDetails}
          />

          {/* Modal */}
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-5 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Quote Details
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Submitted{' '}
                  {new Date(
                    selectedQuote.createdAt
                  ).toLocaleString()}
                </p>
              </div>

              <button
                onClick={handleCloseDetails}
                className="p-2 rounded-lg hover:bg-gray-100 transition"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Customer Information */}
              <section>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
                  Customer Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex gap-3">
                    <FileText className="w-5 h-5 text-gray-400 mt-0.5" />

                    <div>
                      <p className="text-xs text-gray-500">
                        Full Name
                      </p>

                      <p className="font-medium text-gray-900">
                        {selectedQuote.fullName}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Building2 className="w-5 h-5 text-gray-400 mt-0.5" />

                    <div>
                      <p className="text-xs text-gray-500">
                        Company
                      </p>

                      <p className="font-medium text-gray-900">
                        {selectedQuote.companyName || '-'}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Mail className="w-5 h-5 text-gray-400 mt-0.5" />

                    <div>
                      <p className="text-xs text-gray-500">
                        Email
                      </p>

                      <p className="font-medium text-gray-900 break-all">
                        {selectedQuote.email}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Phone className="w-5 h-5 text-gray-400 mt-0.5" />

                    <div>
                      <p className="text-xs text-gray-500">
                        Phone
                      </p>

                      <p className="font-medium text-gray-900">
                        {selectedQuote.phone || '-'}
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Gift Requirements */}
              <section>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
                  Gift Requirements
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Package className="w-4 h-4 text-gray-500" />

                      <p className="text-xs text-gray-500">
                        Quantity
                      </p>
                    </div>

                    <p className="font-semibold text-gray-900">
                      {selectedQuote.quantity ?? '-'}
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-xs text-gray-500 mb-2">
                      Budget / Gift
                    </p>

                    <p className="font-semibold text-gray-900">
                      {selectedQuote.budgetPerGift || '-'}
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CalendarDays className="w-4 h-4 text-gray-500" />

                      <p className="text-xs text-gray-500">
                        Occasion
                      </p>
                    </div>

                    <p className="font-semibold text-gray-900">
                      {selectedQuote.occasion || '-'}
                    </p>
                  </div>
                </div>
              </section>

              {/* Customer Message */}
              <section>
                <div className="flex items-center gap-2 mb-3">
                  <MessageSquare className="w-4 h-4 text-gray-500" />

                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                    Customer Message
                  </h3>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700 whitespace-pre-wrap">
                    {selectedQuote.message || 'No message provided.'}
                  </p>
                </div>
              </section>

              {/* Management */}
              <section className="border-t border-gray-200 pt-6">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
                  Manage Quote
                </h3>

                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="quote-status"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Status
                    </label>

                    <select
                      id="quote-status"
                      value={selectedStatus}
                      onChange={(e) =>
                        setSelectedStatus(e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white outline-none focus:ring-2 focus:ring-red-500"
                    >
                      {STATUSES.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="admin-notes"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Admin Notes
                    </label>

                    <textarea
                      id="admin-notes"
                      value={adminNotes}
                      onChange={(e) =>
                        setAdminNotes(e.target.value)
                      }
                      rows={4}
                      placeholder="Add internal notes about this quote..."
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg resize-none outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>

                  {successMsg && (
                    <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-3 text-sm">
                      {successMsg}
                    </div>
                  )}

                  {errorMsg && (
                    <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-3 text-sm">
                      {errorMsg}
                    </div>
                  )}

                  <div className="flex justify-end gap-3">
                    <button
                      onClick={handleCloseDetails}
                      className="px-5 py-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm font-medium transition"
                    >
                      Close
                    </button>

                    <button
                      onClick={handleUpdateQuote}
                      disabled={saving}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold transition"
                    >
                      <Save className="w-4 h-4" />

                      {saving ? 'Saving...' : 'Save Changes'}
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}

            {/* Account Settings Modal */}
      {showAccountSettings && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => {
              if (!accountLoading) {
                setShowAccountSettings(false);
                setAccountError('');
                setAccountSuccess('');
              }
            }}
          />

          {/* Modal */}
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl">
            {/* Header */}
            <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-6 py-5 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Account Settings
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Manage your admin account
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  if (!accountLoading) {
                    setShowAccountSettings(false);
                    setAccountError('');
                    setAccountSuccess('');
                  }
                }}
                disabled={accountLoading}
                className="p-2 rounded-lg hover:bg-gray-100 transition disabled:opacity-50"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-8">
              {/* Current Account */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
                    <User className="w-5 h-5 text-red-600" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Account Information
                    </h3>

                    <p className="text-sm text-gray-500">
                      Your current administrator account
                    </p>
                  </div>
                </div>

                <label
                  htmlFor="current-admin-email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Current Email
                </label>

                <input
                  id="current-admin-email"
                  type="email"
                  value={adminEmail}
                  disabled
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-600 cursor-not-allowed"
                />
              </section>

              {/* Change Email */}
              <section className="border-t border-gray-200 pt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Change Email
                    </h3>

                    <p className="text-sm text-gray-500">
                      Update the email used to sign in
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <input
                    type="email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    placeholder="Enter new email address"
                    disabled={accountLoading}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-red-500 disabled:bg-gray-50"
                  />

                  <button
                    type="button"
                    onClick={handleChangeEmail}
                    disabled={accountLoading}
                    className="px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold transition"
                  >
                    {accountLoading ? 'Updating...' : 'Change Email'}
                  </button>
                </div>
              </section>

              {/* Change Password */}
              <section className="border-t border-gray-200 pt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
                    <KeyRound className="w-5 h-5 text-purple-600" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Change Password
                    </h3>

                    <p className="text-sm text-gray-500">
                      Update your admin login password
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="current-password"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Current Password
                    </label>

                    <input
                      id="current-password"
                      type="password"
                      value={currentPassword}
                      onChange={(e) =>
                        setCurrentPassword(e.target.value)
                      }
                      placeholder="Enter current password"
                      disabled={accountLoading}
                      autoComplete="current-password"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-red-500 disabled:bg-gray-50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="new-password"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      New Password
                    </label>

                    <input
                      id="new-password"
                      type="password"
                      value={newPassword}
                      onChange={(e) =>
                        setNewPassword(e.target.value)
                      }
                      placeholder="Enter new password"
                      disabled={accountLoading}
                      autoComplete="new-password"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-red-500 disabled:bg-gray-50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="confirm-password"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Confirm New Password
                    </label>

                    <input
                      id="confirm-password"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) =>
                        setConfirmPassword(e.target.value)
                      }
                      placeholder="Confirm new password"
                      disabled={accountLoading}
                      autoComplete="new-password"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-red-500 disabled:bg-gray-50"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={handleChangePassword}
                    disabled={accountLoading}
                    className="px-5 py-2.5 rounded-lg bg-gray-900 hover:bg-gray-800 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold transition"
                  >
                    {accountLoading
                      ? 'Updating...'
                      : 'Change Password'}
                  </button>
                </div>
              </section>

              {/* Messages */}
              {accountSuccess && (
                <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-3 text-sm">
                  {accountSuccess}
                </div>
              )}

              {accountError && (
                <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-3 text-sm">
                  {accountError}
                </div>
              )}

              {/* Close */}
              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  onClick={() => {
                    if (!accountLoading) {
                      setShowAccountSettings(false);
                      setAccountError('');
                      setAccountSuccess('');
                    }
                  }}
                  disabled={accountLoading}
                  className="px-5 py-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 text-sm font-medium transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}


    </div>
  );
}