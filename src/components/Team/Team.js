import React from 'react';

/**
 * Team component displays a list of team members in a responsive grid.
 * @param {Object[]} members - Array of team member objects.
 * @param {string} members[].name - Name of the team member.
 * @param {string} members[].title - Title/role of the team member.
 * @param {string} members[].details - Details/description (can include line breaks with \n).
 * @param {string} members[].image - Image URL or import for the team member.
 */
const Team = ({ members }) => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="text-center mb-10">
        <h3 className="text-xl font-semibold text-[#7c3f18] mb-2">Our Team</h3>
        <h2 className="text-3xl font-bold text-gray-900">Meet Our Professional</h2>
      </div>
      <div className={`flex flex-wrap justify-center gap-8`}>
        {members.map((member, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center max-w-xs w-full"
          >
            <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-gray-200 shadow-md flex items-center justify-center bg-white">
              <img
                src={member.image}
                alt={member.name}
                className="object-cover w-full h-full"
              />
            </div>
            <h4 className="font-bold text-lg text-gray-900 mb-1 text-center">{member.name}</h4>
            <div className="font-semibold text-gray-700 mb-2 text-center">{member.title}</div>
            <div className="text-gray-600 text-sm whitespace-pre-line text-center">{member.details}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team; 