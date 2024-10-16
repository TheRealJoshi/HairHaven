// components/dashboard/ui/Calendar.js
import { useState } from "react";

export default function Calendar({ className, mode, onDateClick, users }) {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const startOfMonth = new Date(currentYear, currentMonth, 1);
  const endOfMonth = new Date(currentYear, currentMonth + 1, 0);
  const startDay = startOfMonth.getDay(); // 0 (Sun) to 6 (Sat)
  const totalDays = endOfMonth.getDate();

  // Generate dates with leading empty cells
  const dates = [];
  for (let i = 0; i < startDay; i++) {
    dates.push(null);
  }
  for (let day = 1; day <= totalDays; day++) {
    const date = new Date(currentYear, currentMonth, day);
    const hasAppointment = users.some(
      (user) => user.appointmentDate.toDateString() === date.toDateString()
    );
    dates.push({ date, hasAppointment });
  }

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const monthNames = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];

  return (
    <div className={className}>
      {/* Month Navigation */}
      <div className="flex justify-between items-center mb-2">
        <button
          onClick={handlePrevMonth}
          className="text-gray-500 hover:text-gray-700"
          aria-label="Previous Month"
        >
          &lt;
        </button>
        <span className="font-semibold">
          {monthNames[currentMonth]} {currentYear}
        </span>
        <button
          onClick={handleNextMonth}
          className="text-gray-500 hover:text-gray-700"
          aria-label="Next Month"
        >
          &gt;
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center font-semibold text-gray-700">
            {day}
          </div>
        ))}
        {dates.map((item, index) => (
          item ? (
            <button
              key={index}
              onClick={() => onDateClick(item.date)}
              className={`p-2 rounded relative ${
                item.hasAppointment
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              {item.date.getDate()}
              {item.hasAppointment && (
                <span className="absolute top-1 right-1 block h-2 w-2 bg-red-500 rounded-full"></span>
              )}
            </button>
          ) : (
            <div key={index}></div>
          )
        ))}
      </div>
    </div>
  );
}
