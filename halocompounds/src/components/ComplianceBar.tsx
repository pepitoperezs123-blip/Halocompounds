/** Persistent RUO disclaimer — required framing for a regulated-compound brand. */
export default function ComplianceBar() {
  return (
    <div className="bg-foreground text-center text-[11px] font-medium uppercase tracking-[0.14em] text-background">
      <p className="px-4 py-2">
        For laboratory research use only · Not for human or animal consumption
      </p>
    </div>
  );
}
