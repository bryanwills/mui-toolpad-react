import { Stack, Button, Dialog, DialogTitle, DialogContent } from '@mui/material';
import React from 'react';
import CodeIcon from '@mui/icons-material/Code';
import PageIcon from '@mui/icons-material/Web';
import SourceIcon from '@mui/icons-material/Source';
import renderPageCode from '../../../renderPageCode';
import useLatest from '../../../utils/useLatest';
import { useDom } from '../../DomProvider';
import { usePageEditorState } from './PageEditorProvider';
import DerivedStateEditor from './DerivedStateEditor';

export default function PageOptionsPanel() {
  const dom = useDom();
  const state = usePageEditorState();
  const [viewedSource, setViewedSource] = React.useState<string | null>(null);

  const handleViewSource = React.useCallback(() => {
    const { code } = renderPageCode(dom, state.nodeId, { pretty: true });
    setViewedSource(code);
  }, [dom, state.nodeId]);

  const handleViewedSourceDialogClose = React.useCallback(() => setViewedSource(null), []);

  // To keep it around during closing animation
  const dialogSourceContent = useLatest(viewedSource);

  return (
    <div>
      <Stack spacing={1} alignItems="start">
        <Button
          startIcon={<PageIcon />}
          color="inherit"
          component="a"
          href={`/pages/${state.nodeId}`}
        >
          View Page
        </Button>
        <Button startIcon={<SourceIcon />} color="inherit" onClick={handleViewSource}>
          View Page Source
        </Button>
        <Button
          startIcon={<CodeIcon />}
          color="inherit"
          component="a"
          href={`/api/export/${state.nodeId}`}
        >
          Page Component
        </Button>
        <DerivedStateEditor />
      </Stack>
      <Dialog fullWidth maxWidth="lg" open={!!viewedSource} onClose={handleViewedSourceDialogClose}>
        <DialogTitle>Page component</DialogTitle>
        <DialogContent>
          <pre>{dialogSourceContent}</pre>
        </DialogContent>
      </Dialog>
    </div>
  );
}
