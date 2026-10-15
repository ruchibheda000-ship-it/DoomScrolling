import React, { useState, useEffect } from 'react';

const CLUSTERS = [
  { id: 'automatic-checking', name: 'Automatic Phone Checking', code: 'C-01' },
  { id: 'immediate-availability', name: 'Immediate Availability', code: 'C-02' },
  { id: 'existing-hobbies', name: 'Existing Hobbies & Alternative Activities', code: 'C-03' },
  { id: 'reasons-for-use', name: 'Reasons for Phone Use', code: 'C-04' },
  { id: 'intended-vs-actual', name: 'Intended vs. Actual Use', code: 'C-05' },
  { id: 'emotional-responses', name: 'Emotional Responses', code: 'C-06' },
  { id: 'exceptions-contradictions', name: 'Exceptions & Contradictions', code: 'C-07' },
];

const NOTE_TYPES = [
  { id: 'observation', label: 'OBSERVED EVIDENCE (SIMULATED)', bg: 'bg-[#171717] text-[#F5F4F0]' },
  { id: 'explanation', label: 'PARTICIPANT EXPLANATION (SIMULATED)', bg: 'bg-[#EAE9E4] text-[#171717]' },
  { id: 'interpretation', label: 'RESEARCHER INTERPRETATION', bg: 'bg-[#DFDDD6] text-[#262626]' },
  { id: 'literature', label: 'LITERATURE FINDING', bg: 'bg-[#E4E4DC] text-[#404040]' },
  { id: 'hypothesis', label: 'HYPOTHESIS TO VALIDATE', bg: 'bg-[#F2EFE8] border border-[#171717] text-[#171717]' },
];

const INITIAL_NOTES = [
  {
    id: 'n1',
    clusterId: 'automatic-checking',
    type: 'observation',
    tag: '[Simulated Observation]',
    text: '[Simulated observation: Observed participant reach pocket during a 15-second conversational pause without any audio or haptic alert triggering.]'
  },
  {
    id: 'n2',
    clusterId: 'automatic-checking',
    type: 'explanation',
    tag: '[Simulated: College Colleague]',
    text: '"[Simulated quote: I unlock my phone before I even realize I am doing it; it is just resting in my palm.]"'
  },
  {
    id: 'n3',
    clusterId: 'immediate-availability',
    type: 'interpretation',
    tag: '[Researcher Interpretation]',
    text: 'The smartphone represents zero physical startup friction. The physical distance between the user and the screen is consistently under 30 centimeters.'
  },
  {
    id: 'n4',
    clusterId: 'existing-hobbies',
    type: 'explanation',
    tag: '[Simulated: My Mother]',
    text: '"[Simulated quote: I love knitting and gardening, but getting the yarn basket out for just ten minutes feels like too much work.]"'
  },
  {
    id: 'n5',
    clusterId: 'existing-hobbies',
    type: 'hypothesis',
    tag: '[Provisional Hypothesis]',
    text: 'People may have activities they genuinely enjoy but choose not to begin during short breaks because another option is easier to access.'
  },
  {
    id: 'n6',
    clusterId: 'reasons-for-use',
    type: 'observation',
    tag: '[Simulated: Young Children]',
    text: '[Simulated observation: Child requesting smartphone when waiting at red traffic signals, seeking interactive cartoon videos.]'
  },
  {
    id: 'n7',
    clusterId: 'intended-vs-actual',
    type: 'explanation',
    tag: '[Simulated: College Colleague]',
    text: '"[Simulated quote: I opened the phone to check what time my lecture was, and thirty minutes later I was watching cooking clips.]"'
  },
  {
    id: 'n8',
    clusterId: 'emotional-responses',
    type: 'interpretation',
    tag: '[Researcher Interpretation]',
    text: 'Post-scrolling affective state is characterized by mild dysphoria and cognitive fog rather than rejuvenation or satisfaction.'
  },
  {
    id: 'n9',
    clusterId: 'exceptions-contradictions',
    type: 'explanation',
    tag: '[Simulated: Neighbour\'s Grandfather]',
    text: '"[Simulated quote: I check news on the tablet every morning with tea, but when I sit outside on the porch, I just watch the trees.]"'
  },
  {
    id: 'n10',
    clusterId: 'exceptions-contradictions',
    type: 'literature',
    tag: '[Literature: CHBR 2024]',
    text: 'Doomscrolling (compulsive negative news consumption) specifically evokes existential dread, whereas habitual scrolling often produces cognitive numbness.'
  }
];

export default function AffinityMap() {
  const STORAGE_KEY = 'boredom_project_affinity_map_en_v3';

  const [notes, setNotes] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Could not load affinity notes from storage', e);
    }
    return INITIAL_NOTES;
  });

  const [activeClusterFilter, setActiveClusterFilter] = useState('ALL');
  const [isAdding, setIsAdding] = useState(false);
  const [editingNoteId, setEditingNoteId] = useState(null);

  // New Note Form State
  const [newCluster, setNewCluster] = useState('automatic-checking');
  const [newType, setNewType] = useState('observation');
  const [newTag, setNewTag] = useState('[Simulated Observation]');
  const [newText, setNewText] = useState('');

  // Edit Note Form State
  const [editText, setEditText] = useState('');
  const [editTag, setEditTag] = useState('');
  const [editType, setEditType] = useState('observation');
  const [editCluster, setEditCluster] = useState('automatic-checking');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    } catch (e) {
      console.warn('Could not save affinity notes to storage', e);
    }
  }, [notes]);

  const handleAddNote = (e) => {
    e.preventDefault();
    if (!newText.trim()) return;

    const newNote = {
      id: 'n_' + Date.now(),
      clusterId: newCluster,
      type: newType,
      tag: newTag.trim() || '[Unspecified Tag]',
      text: newText.trim()
    };

    setNotes((prev) => [newNote, ...prev]);
    setNewText('');
    setIsAdding(false);
  };

  const handleStartEdit = (note) => {
    setEditingNoteId(note.id);
    setEditText(note.text);
    setEditTag(note.tag);
    setEditType(note.type);
    setEditCluster(note.clusterId);
  };

  const handleSaveEdit = (noteId) => {
    setNotes((prev) =>
      prev.map((n) =>
        n.id === noteId
          ? { ...n, text: editText.trim(), tag: editTag.trim(), type: editType, clusterId: editCluster }
          : n
      )
    );
    setEditingNoteId(null);
  };

  const handleDeleteNote = (noteId) => {
    setNotes((prev) => prev.filter((n) => n.id !== noteId));
  };

  const handleMoveCluster = (noteId, targetClusterId) => {
    setNotes((prev) =>
      prev.map((n) => (n.id === noteId ? { ...n, clusterId: targetClusterId } : n))
    );
  };

  const handleResetData = () => {
    if (window.confirm('Reset affinity map notes to initial research data?')) {
      setNotes(INITIAL_NOTES);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  const filteredClusters = activeClusterFilter === 'ALL'
    ? CLUSTERS
    : CLUSTERS.filter((c) => c.id === activeClusterFilter);

  return (
    <div className="space-y-6">
      {/* Map Control Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-[#EAE9E4] rounded-xs border border-[#DDDCD6] text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#171717]">AFFINITY SYNTHESIS</span>
          <span>•</span>
          <span className="text-[#737373]">{notes.length} QUALITATIVE NOTES</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsAdding(!isAdding)}
            className="px-3 py-1 bg-[#171717] text-[#F5F4F0] rounded-xs hover:bg-black transition-colors font-bold"
          >
            {isAdding ? '✕ CANCEL' : '+ ADD NOTE'}
          </button>
          <button
            onClick={handleResetData}
            title="Reset to initial research notes"
            className="px-2 py-1 bg-[#FFFFFF] border border-[#D5D4CE] text-[#737373] hover:text-[#171717] rounded-xs transition-colors"
          >
            ↺ RESET
          </button>
        </div>
      </div>

      {/* Cluster Filter Buttons */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-[11px] font-mono scrollbar-none">
        <button
          onClick={() => setActiveClusterFilter('ALL')}
          className={`px-2.5 py-1 rounded-xs transition-colors whitespace-nowrap ${
            activeClusterFilter === 'ALL'
              ? 'bg-[#171717] text-[#F5F4F0] font-bold'
              : 'bg-[#EAE9E4] text-[#525252] hover:bg-[#DDDCD6]'
          }`}
        >
          ALL CLUSTERS ({CLUSTERS.length})
        </button>
        {CLUSTERS.map((c) => {
          const count = notes.filter((n) => n.clusterId === c.id).length;
          return (
            <button
              key={c.id}
              onClick={() => setActiveClusterFilter(c.id)}
              className={`px-2.5 py-1 rounded-xs transition-colors whitespace-nowrap ${
                activeClusterFilter === c.id
                  ? 'bg-[#171717] text-[#F5F4F0] font-bold'
                  : 'bg-[#EAE9E4] text-[#525252] hover:bg-[#DDDCD6]'
              }`}
            >
              {c.code} ({count})
            </button>
          );
        })}
      </div>

      {/* Add Note Modal/Form */}
      {isAdding && (
        <form
          onSubmit={handleAddNote}
          className="p-4 bg-[#FFFFFF] border-2 border-[#171717] rounded-xs space-y-3 shadow-md text-xs font-mono"
        >
          <div className="font-bold text-sm text-[#171717] uppercase tracking-wide">
            Add New Qualitative Research Note
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div>
              <label className="block text-[10px] text-[#737373] uppercase mb-1">Target Cluster</label>
              <select
                value={newCluster}
                onChange={(e) => setNewCluster(e.target.value)}
                className="w-full p-1.5 bg-[#F5F4F0] border border-[#DDDCD6] rounded-xs font-mono text-xs"
              >
                {CLUSTERS.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.code}: {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[10px] text-[#737373] uppercase mb-1">Evidence Type</label>
              <select
                value={newType}
                onChange={(e) => {
                  setNewType(e.target.value);
                  if (e.target.value === 'observation') setNewTag('[Simulated Observation]');
                  else if (e.target.value === 'explanation') setNewTag('[Simulated Participant Quote]');
                  else if (e.target.value === 'interpretation') setNewTag('[Researcher Interpretation]');
                  else if (e.target.value === 'literature') setNewTag('[Secondary Source citation]');
                  else setNewTag('[Provisional Hypothesis]');
                }}
                className="w-full p-1.5 bg-[#F5F4F0] border border-[#DDDCD6] rounded-xs font-mono text-xs"
              >
                {NOTE_TYPES.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[10px] text-[#737373] uppercase mb-1">Participant / Source Tag</label>
              <input
                type="text"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                placeholder="e.g. [Simulated: College Colleague]"
                className="w-full p-1.5 bg-[#F5F4F0] border border-[#DDDCD6] rounded-xs font-mono text-xs"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] text-[#737373] uppercase mb-1">Note Content / Verbatim Quote</label>
            <textarea
              rows={3}
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              placeholder="Enter empirical observation, verified quote placeholder, or hypothesis..."
              className="w-full p-2 bg-[#F5F4F0] border border-[#DDDCD6] rounded-xs font-sans text-xs text-[#171717]"
            />
          </div>

          <div className="flex justify-end gap-2 pt-1">
            <button
              type="button"
              onClick={() => setIsAdding(false)}
              className="px-3 py-1 bg-[#EAE9E4] text-[#525252] rounded-xs"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-1 bg-[#171717] text-[#F5F4F0] font-bold rounded-xs hover:bg-black"
            >
              Save Note
            </button>
          </div>
        </form>
      )}

      {/* Clusters List */}
      <div className="space-y-6">
        {filteredClusters.map((cluster) => {
          const clusterNotes = notes.filter((n) => n.clusterId === cluster.id);
          return (
            <div
              key={cluster.id}
              className="p-4 bg-[#FFFFFF] border border-[#E5E4DE] rounded-xs space-y-3 shadow-xs"
            >
              {/* Cluster Header */}
              <div className="flex items-center justify-between border-b border-[#ECEBE6] pb-2">
                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 bg-[#171717] text-[#F5F4F0] text-[10px] font-mono font-bold rounded-xs">
                    {cluster.code}
                  </span>
                  <h3 className="font-extrabold text-sm sm:text-base text-[#171717] uppercase tracking-tight">
                    {cluster.name}
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-[#737373]">
                  {clusterNotes.length} {clusterNotes.length === 1 ? 'NOTE' : 'NOTES'}
                </span>
              </div>

              {/* Notes Container */}
              {clusterNotes.length === 0 ? (
                <div className="p-4 text-center text-xs font-mono text-[#A3A3A3] italic bg-[#FAF9F6] border border-dashed border-[#DDDCD6] rounded-xs">
                  No notes in this cluster. Use "+ ADD NOTE" above to document evidence.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {clusterNotes.map((note) => {
                    const typeObj = NOTE_TYPES.find((t) => t.id === note.type) || NOTE_TYPES[0];
                    const isEditing = editingNoteId === note.id;

                    if (isEditing) {
                      return (
                        <div
                          key={note.id}
                          className="p-3 bg-[#FAF9F6] border-2 border-[#171717] rounded-xs space-y-2 text-xs font-mono"
                        >
                          <span className="font-bold text-[10px] uppercase text-[#171717]">Editing Note</span>
                          <textarea
                            rows={3}
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            className="w-full p-1.5 bg-[#FFFFFF] border border-[#DDDCD6] rounded-xs font-sans text-xs"
                          />
                          <div className="grid grid-cols-2 gap-1.5">
                            <select
                              value={editCluster}
                              onChange={(e) => setEditCluster(e.target.value)}
                              className="p-1 bg-[#FFFFFF] border border-[#DDDCD6] rounded-xs text-[10px]"
                            >
                              {CLUSTERS.map((c) => (
                                <option key={c.id} value={c.id}>
                                  {c.code}: {c.name}
                                </option>
                              ))}
                            </select>
                            <input
                              type="text"
                              value={editTag}
                              onChange={(e) => setEditTag(e.target.value)}
                              className="p-1 bg-[#FFFFFF] border border-[#DDDCD6] rounded-xs text-[10px]"
                            />
                          </div>
                          <div className="flex justify-end gap-1.5 pt-1">
                            <button
                              onClick={() => setEditingNoteId(null)}
                              className="px-2 py-0.5 bg-[#EAE9E4] text-[#525252] rounded-xs text-[10px]"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={() => handleSaveEdit(note.id)}
                              className="px-3 py-0.5 bg-[#171717] text-[#F5F4F0] font-bold rounded-xs text-[10px]"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      );
                    }

                    return (
                      <div
                        key={note.id}
                        className="p-3 bg-[#FAF9F6] border border-[#E5E4DE] rounded-xs flex flex-col justify-between space-y-2 hover:border-[#171717] transition-colors group"
                      >
                        <div className="space-y-1.5">
                          {/* Note Tag & Type */}
                          <div className="flex items-center justify-between text-[9px] font-mono">
                            <span className={`px-1.5 py-0.5 rounded-xs font-bold ${typeObj.bg}`}>
                              {typeObj.label}
                            </span>
                            <span className="text-[#737373] truncate max-w-[140px]" title={note.tag}>
                              {note.tag}
                            </span>
                          </div>

                          {/* Note Content */}
                          <p className="text-xs sm:text-[13px] text-[#262626] leading-relaxed font-sans">
                            {note.text}
                          </p>
                        </div>

                        {/* Note Actions */}
                        <div className="pt-2 border-t border-[#ECEBE6] flex items-center justify-between text-[10px] font-mono text-[#737373]">
                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={() => handleStartEdit(note)}
                              className="hover:text-[#171717] underline decoration-neutral-300"
                            >
                              Edit
                            </button>
                            <span>•</span>
                            <button
                              onClick={() => handleDeleteNote(note.id)}
                              className="hover:text-red-600 underline decoration-neutral-300"
                            >
                              Delete
                            </button>
                          </div>

                          {/* Move to another cluster dropdown */}
                          <select
                            value={note.clusterId}
                            onChange={(e) => handleMoveCluster(note.id, e.target.value)}
                            aria-label="Move cluster"
                            className="text-[9px] font-mono bg-transparent text-[#737373] hover:text-[#171717] cursor-pointer border-none focus:ring-0 p-0"
                          >
                            <option value={note.clusterId} disabled>
                              Move...
                            </option>
                            {CLUSTERS.filter((c) => c.id !== note.clusterId).map((c) => (
                              <option key={c.id} value={c.id}>
                                → {c.code}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="p-3 bg-[#EAE9E4] text-[11px] font-mono text-[#525252] rounded-xs border border-[#DDDCD6]">
        💾 <strong>Session Persistence:</strong> Changes, newly added notes, and cluster reorganizations are saved in your browser local storage for this session. Illustrative interview citations are marked as simulated for research integrity.
      </div>
    </div>
  );
}
