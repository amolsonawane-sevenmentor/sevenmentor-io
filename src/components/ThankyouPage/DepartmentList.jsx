export default function DepartmentList({ items = [] }) {
    return (
      <section aria-labelledby="departments-heading" className="mt-6">
        <h2 id="departments-heading" className="sr-only">
          Departments and phone numbers
        </h2>
  
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((dept) => (
            <li key={dept.name} className="rounded-lg border border-border bg-card  border-[#262626] text-card-foreground p-4">
              <div className="flex items-center justify-between">
                <div className="min-w-0">
                  <p className="font-medium text-white">{dept.name}</p>
                  <p className="text-sm text-muted-foreground text-white">Department</p>
                </div>
                <a
                  href={`tel:${dept.phone.replace(/[^+\d]/g, "")}`}
                  className="text-orange-400 underline-offset-4 hover:underline hover:text-orange-300"
                  aria-label={`Call ${dept.name} at ${dept.phone}`}
                >
                  {dept.phone}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>
    )
  }