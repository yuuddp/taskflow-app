import React, { useState, useEffect } from "react";
import {
  Check,
  X,
  Edit2,
  Trash2,
  Plus,
  List,
  CheckCircle,
  Circle,
} from "lucide-react";

function LandingPage({ onStart }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-blue-600">
      {/* Header */}
      <header className="pt-8 pb-4 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-white text-3xl font-bold">TaskFlow</h1>
        </div>
      </header>

      {/* Hero Section */}
      <main className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Mengelola Tugas Kamu dengan Mudah
          </h2>
          <p className="text-xl text-blue-50 mb-12 max-w-2xl mx-auto">
            Aplikasi to-do list untuk membantu kamu mengorganisir tugas harian,
            meningkatkan produktivitas, dan membantu mencapai tujuan.
          </p>

          <button
            onClick={onStart}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
          >
            Mulai Sekarang
          </button>
        </div>

        {/* Features */}
        <div className="max-w-5xl mx-auto mt-24 grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
            <div className="bg-white/20 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Plus className="text-white" size={28} />
            </div>
            <h3 className="text-white text-xl font-semibold mb-3">
              Tambah Tugas Cepat
            </h3>
            <p className="text-blue-50">
              Buat tugas baru hanya dalam hitungan detik dengan antarmuka yang
              simpel.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
            <div className="bg-white/20 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="text-white" size={28} />
            </div>
            <h3 className="text-white text-xl font-semibold mb-3">
              Tandai Selesai
            </h3>
            <p className="text-blue-50">
              Centang tugas yang sudah selesai dan rasakan kepuasan
              menyelesaikan pekerjaan.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
            <div className="bg-white/20 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <List className="text-white" size={28} />
            </div>
            <h3 className="text-white text-xl font-semibold mb-3">
              Filter & Kelola
            </h3>
            <p className="text-blue-50">
              Filter tugas berdasarkan status dan kelola dengan mudah
              menggunakan fitur edit dan hapus.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 mt-16">
        <div className="max-w-4xl mx-auto text-center text-blue-50">
          <p>© 2025 TaskFlow. Dibuat oleh Yudha Pratama_51423486.</p>
        </div>
      </footer>
    </div>
  );
}

function Dashboard({ onBack }) {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all");
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState("");

  // Load todos from localStorage
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Save todos to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // CREATE - Add new todo
  const addTodo = () => {
    if (inputValue.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTodos([newTodo, ...todos]);
    setInputValue("");
  };

  // UPDATE - Toggle todo completion
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // UPDATE - Edit todo text
  const startEdit = (id, text) => {
    setEditingId(id);
    setEditValue(text);
  };

  const saveEdit = (id) => {
    if (editValue.trim() === "") return;

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: editValue } : todo
      )
    );
    setEditingId(null);
    setEditValue("");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditValue("");
  };

  // DELETE - Remove todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Filter todos
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  // Statistics
  const stats = {
    total: todos.length,
    completed: todos.filter((t) => t.completed).length,
    active: todos.filter((t) => !t.completed).length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">TaskFlow</h1>
          <button
            onClick={onBack}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Kembali ke Beranda
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Statistics */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
            <div className="text-3xl font-bold text-blue-600">
              {stats.total}
            </div>
            <div className="text-gray-600 mt-1">Total Tugas</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
            <div className="text-3xl font-bold text-green-600">
              {stats.completed}
            </div>
            <div className="text-gray-600 mt-1">Selesai</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
            <div className="text-3xl font-bold text-orange-600">
              {stats.active}
            </div>
            <div className="text-gray-600 mt-1">Belum Selesai</div>
          </div>
        </div>

        {/* Add Todo Form */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6 border border-blue-100">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Tambah Tugas Baru
          </h2>
          <div className="flex gap-3">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addTodo();
                }
              }}
              placeholder="Apa yang ingin Anda kerjakan?"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoComplete="off"
            />
            <button
              onClick={addTodo}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 font-medium"
            >
              <Plus size={20} />
              Tambah
            </button>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setFilter("all")}
            className={`px-5 py-2 rounded-lg font-medium transition-colors ${
              filter === "all"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
            }`}
          >
            Semua ({stats.total})
          </button>
          <button
            onClick={() => setFilter("active")}
            className={`px-5 py-2 rounded-lg font-medium transition-colors ${
              filter === "active"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
            }`}
          >
            Aktif ({stats.active})
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`px-5 py-2 rounded-lg font-medium transition-colors ${
              filter === "completed"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
            }`}
          >
            Selesai ({stats.completed})
          </button>
        </div>

        {/* Todo List */}
        <div className="space-y-3">
          {filteredTodos.length === 0 ? (
            <div className="bg-white p-12 rounded-lg shadow-sm text-center border border-blue-100">
              <Circle className="mx-auto text-gray-300 mb-4" size={48} />
              <p className="text-gray-500 text-lg">
                {filter === "all" &&
                  "Belum ada tugas. Tambahkan tugas pertama Anda!"}
                {filter === "active" && "Tidak ada tugas aktif."}
                {filter === "completed" && "Belum ada tugas yang selesai."}
              </p>
            </div>
          ) : (
            filteredTodos.map((todo) => (
              <div
                key={todo.id}
                className="bg-white p-4 rounded-lg shadow-sm border border-blue-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4">
                  {/* Checkbox */}
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
                      todo.completed
                        ? "bg-blue-600 border-blue-600"
                        : "border-gray-300 hover:border-blue-400"
                    }`}
                  >
                    {todo.completed && (
                      <Check size={16} className="text-white" />
                    )}
                  </button>

                  {/* Todo Text */}
                  {editingId === todo.id ? (
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          saveEdit(todo.id);
                        }
                      }}
                      className="flex-1 px-3 py-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      autoFocus
                      autoComplete="off"
                    />
                  ) : (
                    <span
                      className={`flex-1 text-gray-800 ${
                        todo.completed ? "line-through text-gray-400" : ""
                      }`}
                    >
                      {todo.text}
                    </span>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {editingId === todo.id ? (
                      <>
                        <button
                          onClick={() => saveEdit(todo.id)}
                          className="p-2 text-green-600 hover:bg-green-50 rounded transition-colors"
                          title="Simpan"
                        >
                          <Check size={18} />
                        </button>
                        <button
                          onClick={cancelEdit}
                          className="p-2 text-gray-600 hover:bg-gray-50 rounded transition-colors"
                          title="Batal"
                        >
                          <X size={18} />
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => startEdit(todo.id, todo.text)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                          title="Edit"
                        >
                          <Edit2 size={18} />
                        </button>
                        <button
                          onClick={() => deleteTodo(todo.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                          title="Hapus"
                        >
                          <Trash2 size={18} />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default function TodoApp() {
  const [currentPage, setCurrentPage] = useState("landing");

  return currentPage === "landing" ? (
    <LandingPage onStart={() => setCurrentPage("dashboard")} />
  ) : (
    <Dashboard onBack={() => setCurrentPage("landing")} />
  );
}
